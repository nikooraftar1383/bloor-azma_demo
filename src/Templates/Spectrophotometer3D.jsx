import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

export default function Spectrophotometer3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // -------------------------
    // Scene
    // -------------------------
    const scene = new THREE.Scene();

    // -------------------------
    // Camera
    // -------------------------
    const camera = new THREE.PerspectiveCamera(
      45,
      width / height,
      0.1,
      100
    );

    camera.position.set(4, 3, 5);

    // -------------------------
    // Renderer
    // -------------------------
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setSize(width, height);

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 2)
    );

    mount.appendChild(renderer.domElement);

    // -------------------------
    // Lights
    // -------------------------
    const ambientLight = new THREE.AmbientLight(
      0xffffff,
      1.2
    );

    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(
      0xffffff,
      1.5
    );

    mainLight.position.set(5, 8, 5);
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(
      0xffffff,
      0.6
    );

    fillLight.position.set(-5, 3, -5);
    scene.add(fillLight);

    // -------------------------
    // Device
    // -------------------------
    const device = new THREE.Group();

    scene.add(device);

    // -------------------------
    // Load GLB
    // -------------------------
   const loader = new GLTFLoader();

const dracoLoader = new DRACOLoader();

dracoLoader.setDecoderPath(
  "https://www.gstatic.com/draco/versioned/decoders/1.5.7/"
);

loader.setDRACOLoader(dracoLoader);

loader.load(
  "/models/spectrophotometer.glb",

  (gltf) => {
    const model = gltf.scene;

    model.scale.set(6.5, 6.5, 6.5);
    model.position.set(0, 0, 0);

    device.add(model);
  },

  undefined,

  (error) => {
    console.error(
      "Error loading 3D model:",
      error
    );
  }
);
    // -------------------------
    // Mouse Rotation
    // -------------------------
    let isDragging = false;

    let previousX = 0;
    let previousY = 0;

    let rotationX = 0.3;
    let rotationY = 0.5;

    // -------------------------
    // Zoom
    // -------------------------
    let distance = 6.5;

    function handlePointerDown(e) {
      isDragging = true;

      previousX = e.clientX;
      previousY = e.clientY;

      renderer.domElement.style.cursor =
        "grabbing";
    }

    function handlePointerMove(e) {
      if (!isDragging) return;

      const deltaX =
        e.clientX - previousX;

      const deltaY =
        e.clientY - previousY;

      rotationY += deltaX * 0.008;

      rotationX += deltaY * 0.008;

      rotationX = Math.max(
        -1.2,
        Math.min(1.2, rotationX)
      );

      previousX = e.clientX;
      previousY = e.clientY;
    }

    function handlePointerUp() {
      isDragging = false;

      renderer.domElement.style.cursor =
        "grab";
    }

    // -------------------------
    // Wheel Zoom
    // -------------------------
    function handleWheel(e) {
      e.preventDefault();

      distance += e.deltaY * 0.005;

      distance = Math.max(
        3,
        Math.min(12, distance)
      );
    }

    const dom = renderer.domElement;

    dom.style.cursor = "grab";

    dom.addEventListener(
      "pointerdown",
      handlePointerDown
    );

    window.addEventListener(
      "pointermove",
      handlePointerMove
    );

    window.addEventListener(
      "pointerup",
      handlePointerUp
    );

    dom.addEventListener(
      "wheel",
      handleWheel,
      { passive: false }
    );

    // -------------------------
    // Animation
    // -------------------------
    let animationFrame;

    function animate() {
      animationFrame =
        requestAnimationFrame(animate);

      // Auto rotation
      if (!isDragging) {
        rotationY += 0.004;
      }

      camera.position.x =
        distance *
        Math.sin(rotationY) *
        Math.cos(rotationX);

      camera.position.y =
        distance *
        Math.sin(rotationX) +
        1;

      camera.position.z =
        distance *
        Math.cos(rotationY) *
        Math.cos(rotationX);

      camera.lookAt(0, 0.3, 0);

      renderer.render(
        scene,
        camera
      );
    }

    animate();

    // -------------------------
    // Resize
    // -------------------------
    function handleResize() {
      const w = mount.clientWidth;
      const h = mount.clientHeight;

      camera.aspect = w / h;

      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
    }

    window.addEventListener(
      "resize",
      handleResize
    );

    // -------------------------
    // Cleanup
    // -------------------------
    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "resize",
        handleResize
      );

      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      window.removeEventListener(
        "pointerup",
        handlePointerUp
      );

      dom.removeEventListener(
        "pointerdown",
        handlePointerDown
      );

      dom.removeEventListener(
        "wheel",
        handleWheel
      );

      mount.removeChild(
        renderer.domElement
      );

      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-[400px] rounded-2xl  overflow-hidden"
    />
  );
}