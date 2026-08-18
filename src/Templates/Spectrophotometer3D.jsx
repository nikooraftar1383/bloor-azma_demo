import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

/**
 * نمایشگر سه‌بعدی و قابل‌چرخش دستگاه (نمونه: اسپکتروفتومتر)
 *
 * نحوه استفاده:
 * 1. اگه مدل .glb واقعی داری، از GLTFLoader استفاده کن (پایین توضیح داده شده)
 * 2. اگه فعلاً مدل نداری، همین نسخه با اشکال ساده (Box/Cylinder) رو
 *    می‌تونی به‌عنوان placeholder نگه داری تا مدل واقعی آماده بشه
 *
 * برای مدل واقعی، این import رو اضافه کن:
 *   import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
 *   import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
 *
 * و بخش‌های مشخص‌شده با کامنت "TODO" رو جایگزین کن.
 */

export default function Spectrophotometer3D() {
  const mountRef = useRef(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const [selectedPart, setSelectedPart] = useState(null);

  useEffect(() => {
    const mount = mountRef.current;
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // --- Scene setup ---
    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(4, 3, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // --- Lighting ---
    const ambient = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambient);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(5, 8, 5);
    scene.add(dirLight);
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
    fillLight.position.set(-5, 2, -5);
    scene.add(fillLight);

    // --- Device group (placeholder geometry — replace with GLTF model) ---
    const device = new THREE.Group();

    // بدنه اصلی دستگاه
    const bodyGeo = new THREE.BoxGeometry(2.4, 1.1, 1.4);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0xe8e9ee,
      metalness: 0.2,
      roughness: 0.6,
    });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.name = "بدنه اصلی";
    body.userData.label = "بدنه اصلی دستگاه";
    device.add(body);

    // محفظه نمونه (sample chamber)
    const chamberGeo = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const chamberMat = new THREE.MeshStandardMaterial({
      color: 0x11af9f,
      metalness: 0.3,
      roughness: 0.4,
    });
    const chamber = new THREE.Mesh(chamberGeo, chamberMat);
    chamber.position.set(0.6, 0.35, 0);
    chamber.name = "محفظه نمونه"
    chamber.userData.label = "محفظه نمونه (Sample Chamber)";
    device.add(chamber);

    // منبع نور (light source) - استوانه
    const lampGeo = new THREE.CylinderGeometry(0.15, 0.15, 0.4, 16);
    const lampMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      emissive: 0xf59e0b,
      emissiveIntensity: 0.3,
    });
    const lamp = new THREE.Mesh(lampGeo, lampMat);
    lamp.rotation.z = Math.PI / 2;
    lamp.position.set(-0.9, 0.35, 0);
    lamp.userData.label = "منبع نور (Light Source)";
    device.add(lamp);

    // صفحه نمایش
    const screenGeo = new THREE.BoxGeometry(0.7, 0.4, 0.05);
    const screenMat = new THREE.MeshStandardMaterial({
      color: 0x1a1a2e,
      metalness: 0.1,
      roughness: 0.3,
    });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.set(0, 0.75, 0.7);
    screen.userData.label = "صفحه نمایش (Display)";
    device.add(screen);

    // دکمه‌های کنترل
    for (let i = 0; i < 3; i++) {
      const btnGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.05, 12);
      const btnMat = new THREE.MeshStandardMaterial({ color: 0x6d5bf0 });
      const btn = new THREE.Mesh(btnGeo, btnMat);
      btn.rotation.x = Math.PI / 2;
      btn.position.set(-0.4 + i * 0.25, 0.6, 0.7);
      btn.userData.label = "دکمه کنترل";
      device.add(btn);
    }

    scene.add(device);

    // --- Raycaster for click interaction ---
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    function handleClick(event) {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(device.children);
      if (intersects.length > 0) {
        const label = intersects[0].object.userData.label;
        if (label) setSelectedPart(label);
      }
    }
    renderer.domElement.addEventListener("click", handleClick);

    // --- Manual orbit controls (drag to rotate, no external lib needed) ---
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;
    let rotX = 0.3;
    let rotY = 0.5;
    let distance = 6.5;

    function onPointerDown(e) {
      isDragging = true;
      prevX = e.clientX;
      prevY = e.clientY;
    }
    function onPointerMove(e) {
      if (!isDragging) return;
      const dx = e.clientX - prevX;
      const dy = e.clientY - prevY;
      rotY += dx * 0.008;
      rotX += dy * 0.008;
      rotX = Math.max(-1.2, Math.min(1.2, rotX));
      prevX = e.clientX;
      prevY = e.clientY;
    }
    function onPointerUp() {
      isDragging = false;
    }
    function onWheel(e) {
      e.preventDefault();
      distance += e.deltaY * 0.005;
      distance = Math.max(3, Math.min(12, distance));
    }

    const dom = renderer.domElement;
    dom.style.cursor = "grab";
    dom.addEventListener("pointerdown", (e) => {
      onPointerDown(e);
      dom.style.cursor = "grabbing";
    });
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", () => {
      onPointerUp();
      dom.style.cursor = "grab";
    });
    dom.addEventListener("wheel", onWheel, { passive: false });

    // --- Animation loop ---
    let frameId;
    let autoAngle = 0;
    function animate() {
      frameId = requestAnimationFrame(animate);

      if (autoRotate && !isDragging) {
        autoAngle += 0.004;
        rotY = autoAngle;
      }

      camera.position.x = distance * Math.sin(rotY) * Math.cos(rotX);
      camera.position.y = distance * Math.sin(rotX) + 1;
      camera.position.z = distance * Math.cos(rotY) * Math.cos(rotX);
      camera.lookAt(0, 0.3, 0);

      renderer.render(scene, camera);
    }
    animate();

    // --- Resize handling ---
    function handleResize() {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    window.addEventListener("resize", handleResize);

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", onPointerMove);
      dom.removeEventListener("wheel", onWheel);
      dom.removeEventListener("click", handleClick);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [autoRotate]);

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div
        ref={mountRef}
        className="w-full max-w-[600px] h-[400px] rounded-2xl bg-gradient-to-br from-[#f5f5ff] to-[#eefcf9] border border-[#ecedf3] relative overflow-hidden"
      />

      <div className="flex items-center gap-3">
        <button
          onClick={() => setAutoRotate((v) => !v)}
          className="px-4 py-2 rounded-full text-[13px] font-semibold border border-[#e7e8ee] hover:bg-[#fafafe] transition"
        >
          {autoRotate ? "توقف چرخش خودکار" : "شروع چرخش خودکار"}
        </button>
      </div>

      {selectedPart && (
        <div className="px-4 py-2 rounded-xl bg-[#11af9f]/10 text-[#11af9f] text-[13px] font-semibold">
          قسمت انتخاب‌شده: {selectedPart}
        </div>
      )}

      <p className="text-[12px] text-[#84879a] text-center max-w-[420px]">
        با موس بکشید تا بچرخانید، اسکرول کنید تا زوم کنید، و روی هر قسمت از
        دستگاه کلیک کنید تا نامش را ببینید.
      </p>
    </div>
  );
}