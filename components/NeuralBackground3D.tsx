"use client";
import { useEffect, useRef } from "react";

export default function NeuralBackground3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const isMobile = window.innerWidth < 768;
    const POINT_COUNT = isMobile ? 70 : 140;

    const SPEED_Z = 0.45;
    const LINK_DIST = 180;
    const POINT_SIZE = 2.6;
    const MOUSE_INFLUENCE = 260;
    const PARALLAX_INTENSITY = 0.035; // Augmenté pour plus de profondeur
    const TRAIL_LENGTH = 12;

    const mouse = { x: w / 2, y: h / 2 };
    let time = 0;
    const mouseTrail: { x: number; y: number; alpha: number }[] = [];

    const points = Array.from({ length: POINT_COUNT }, () => ({
      x: (Math.random() - 0.5) * w * 2.2,
      y: (Math.random() - 0.5) * h * 1.8,
      z: Math.random() * 3000 - 1500, // Profondeur Z doublée pour effet 3D
    }));

    function draw() {
      time += 0.005;
      ctx.clearRect(0, 0, w, h);

      // === Fond uniforme violet-noir (#09080e) ===
      ctx.fillStyle = "#09080e";
      ctx.fillRect(0, 0, w, h);

      const offsetX = (mouse.x - w / 2) * PARALLAX_INTENSITY;
      const offsetY = (mouse.y - h / 2) * PARALLAX_INTENSITY;

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        p.z -= SPEED_Z;
        if (p.z < -1500) p.z = 1500; // Ajusté pour nouvelle profondeur

        const scale = 600 / (600 + p.z); // Scale ajustée
        const x2d = w / 2 + (p.x + offsetX * (p.z / 1000)) * scale;
        const y2d = h / 2 + (p.y + offsetY * (p.z / 1000)) * scale;

        const dxm = x2d - mouse.x;
        const dym = y2d - mouse.y;
        const dm = Math.sqrt(dxm * dxm + dym * dym);
        const intensity = Math.max(0, 1 - dm / MOUSE_INFLUENCE);

        // === Lignes ===
        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j];
          const scale2 = 600 / (600 + p2.z);
          const x2 = w / 2 + (p2.x + offsetX * (p2.z / 1000)) * scale2;
          const y2 = h / 2 + (p2.y + offsetY * (p2.z / 1000)) * scale2;

          const dx2d = x2d - x2;
          const dy2d = y2d - y2;
          const dist2d = Math.sqrt(dx2d * dx2d + dy2d * dy2d);

          if (dist2d < LINK_DIST) {
            const fade = 1 - dist2d / LINK_DIST;
            ctx.beginPath();
            ctx.moveTo(x2d, y2d);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = `rgba(180, 90, 255, ${0.05 * fade + intensity * 0.12})`;
            ctx.lineWidth = 1 + intensity * 0.6;
            ctx.stroke();
          }
        }

        // === Points (lumière réduite 30%) ===
        const pulse = 1 + 0.12 * Math.sin(time * 2 + i);
        const size = (POINT_SIZE + intensity * 2.0) * pulse;
        const depthFade = 1 - Math.abs(p.z) / 1500 * 0.4; // Fade basé sur profondeur
        ctx.beginPath();
        ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,150,255,${(0.17 + intensity * 0.42) * depthFade})`; // Réduit 30%
        ctx.fill();

        if (intensity > 0.7) {
          mouseTrail.push({ x: x2d, y: y2d, alpha: 0.4 });
          if (mouseTrail.length > TRAIL_LENGTH) mouseTrail.shift();
        }
      }

      // === Traînée lumineuse (réduite) ===
      for (let i = 0; i < mouseTrail.length; i++) {
        const t = mouseTrail[i];
        ctx.beginPath();
        ctx.arc(t.x, t.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(190,120,255,${t.alpha * 0.7})`; // Réduit 30%
        ctx.fill();
        t.alpha *= 0.88;
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
      {/* === Réseau neural sur fond #09080e === */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full bg-[#09080e] pointer-events-none"
      />
    </div>
  );
}
