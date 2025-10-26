"use client";
import { useEffect, useRef } from "react";

export default function NeuralBackground3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const POINT_COUNT = 130;
    const SPEED_Z = 0.35;
    const LINK_DIST = 180;
    const POINT_SIZE = 2.6;
    const MOUSE_INFLUENCE = 240;
    const PARALLAX_INTENSITY = 0.02;
    const TRAIL_LENGTH = 12;

    const mouse = { x: w / 2, y: h / 2 };
    let time = 0;
    const mouseTrail: { x: number; y: number; alpha: number }[] = [];

    const points = Array.from({ length: POINT_COUNT }, () => ({
      x: (Math.random() - 0.5) * w * 1.8,
      y: (Math.random() - 0.5) * h * 1.4,
      z: Math.random() * 1800 - 900,
    }));

    function draw() {
      time += 0.005;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(7,11,18,1)";
      ctx.fillRect(0, 0, w, h);

      const offsetX = (mouse.x - w / 2) * PARALLAX_INTENSITY;
      const offsetY = (mouse.y - h / 2) * PARALLAX_INTENSITY;

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        p.z -= SPEED_Z;
        if (p.z < -900) p.z = 900;

        const scale = 500 / (500 + p.z);
        const x2d = w / 2 + (p.x + offsetX * (p.z / 1000)) * scale;
        const y2d = h / 2 + (p.y + offsetY * (p.z / 1000)) * scale;

        const dxm = x2d - mouse.x;
        const dym = y2d - mouse.y;
        const dm = Math.sqrt(dxm * dxm + dym * dym);
        const intensity = Math.max(0, 1 - dm / MOUSE_INFLUENCE);

        // === Lignes entre points ===
        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j];
          const scale2 = 500 / (500 + p2.z);
          const x2 = w / 2 + (p2.x + offsetX * (p2.z / 1000)) * scale2;
          const y2 = h / 2 + (p2.y + offsetY * (p2.z / 1000)) * scale2;

          const dx2d = x2d - x2;
          const dy2d = y2d - y2;
          const dist2d = Math.sqrt(dx2d * dx2d + dy2d * dy2d);

          if (dist2d < LINK_DIST) {
            const fade = 1 - dist2d / LINK_DIST;
            const dxm2 = x2 - mouse.x;
            const dym2 = y2 - mouse.y;
            const dm2 = Math.sqrt(dxm2 * dxm2 + dym2 * dym2);
            const intensity2 = Math.max(0, 1 - dm2 / MOUSE_INFLUENCE);
            const combined = Math.max(intensity, intensity2);
            const glow = combined > 0.2 ? combined * 0.25 : 0;

            ctx.beginPath();
            ctx.moveTo(x2d, y2d);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = `rgba(0,255,255,${0.08 * fade + glow * 0.25})`;
            ctx.lineWidth = 1 + glow * 0.8;
            ctx.shadowBlur = glow * 8;
            ctx.shadowColor = `rgba(0,255,255,${0.2 + glow * 0.3})`;
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        }

        // === Points ===
        const pulse = 1 + 0.15 * Math.sin(time * 2 + i);
        const size = (POINT_SIZE + intensity * 2.4) * pulse;
        const edgeFade = Math.min(
          Math.min(x2d / w, 1 - x2d / w),
          Math.min(y2d / h, 1 - y2d / h)
        );
        const alpha = (0.25 + intensity * 0.45) * Math.max(0.5, edgeFade * 2);
        const hueShift = 180 - intensity * 30;

        ctx.shadowBlur = intensity > 0.6 ? 10 : 4;
        ctx.shadowColor = `hsla(${hueShift}, 100%, 60%, ${0.25 + intensity * 0.4})`;
        ctx.beginPath();
        ctx.arc(x2d, y2d, size, 0, Math.PI * 2);

        // micro-scintillement aléatoire
        const flicker =
          Math.random() < 0.002 ? 1.5 : 1; // très rare et discret
        ctx.fillStyle = `hsla(${hueShift}, 100%, 70%, ${alpha * flicker})`;

        ctx.fill();
        ctx.shadowBlur = 0;

        if (intensity > 0.7) {
          mouseTrail.push({ x: x2d, y: y2d, alpha: 0.4 });
          if (mouseTrail.length > TRAIL_LENGTH) mouseTrail.shift();
        }
      }

      // === Traînée douce ===
      for (let i = 0; i < mouseTrail.length; i++) {
        const t = mouseTrail[i];
        ctx.beginPath();
        ctx.arc(t.x, t.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,255,255,${t.alpha})`;
        ctx.fill();
        t.alpha *= 0.9;
      }

      requestAnimationFrame(draw);
    }

    draw();

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {/* 🌌 Glow radial lent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.06),transparent_70%)] animate-[pulse_18s_ease-in-out_infinite]" />

      {/* 🌫️ Halo coloré subtil */}
      <div className="absolute inset-0 mix-blend-screen blur-[120px]">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[rgba(0,255,255,0.04)] rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[rgba(160,100,255,0.04)] rounded-full" />
      </div>

      {/* Canevas neural */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full bg-transparent pointer-events-none"
      />

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}
