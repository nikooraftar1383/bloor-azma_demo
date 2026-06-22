import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const mouse = {
      x: null,
      y: null,
      radius: 150,
    };

    const particles = [];

    class Particle {
      constructor(x, y) {
        this.baseX = x;
        this.baseY = y;

        this.x = x;
        this.y = y;

        this.baseSize = Math.random() * 0.5 + 1.5;
        this.size = this.baseSize;

        this.distance = Infinity;
      }

      update() {
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;

          this.distance = Math.sqrt(
            dx * dx + dy * dy
          );

          if (this.distance < mouse.radius) {
            const force =
              (mouse.radius - this.distance) /
              mouse.radius;

            const angle = Math.atan2(dy, dx);

            this.x +=
              Math.cos(angle) * force * 8;

            this.y +=
              Math.sin(angle) * force * 8;
          }
        }

        this.x +=
          (this.baseX - this.x) * 0.05;

        this.y +=
          (this.baseY - this.y) * 0.05;
      }

      draw() {
        let intensity = 0;

        if (this.distance < mouse.radius) {
          intensity =
            1 - this.distance / mouse.radius;
        }

        const r =
          140 + (168 - 140) * intensity;

        const g =
          140 + (85 - 140) * intensity;

        const b =
          140 + (247 - 140) * intensity;

        this.size =
          this.baseSize + intensity * 1.5;

        ctx.beginPath();

        ctx.arc(
          this.x,
          this.y,
          this.size,
          0,
          Math.PI * 2
        );

        ctx.shadowBlur = intensity * 20;

        ctx.shadowColor =
          "rgba(168,85,247,0.9)";

        ctx.fillStyle = `rgb(${r},${g},${b})`;

        ctx.fill();
      }
    }

    const PARTICLE_COUNT = 70;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(
        new Particle(
          Math.random() * width,
          Math.random() * height
        )
      );
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "1000px",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}