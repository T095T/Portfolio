"use client";

import { useEffect, useRef } from "react";

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const stars = Array.from({ length: 120 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.8 + 0.5, // star radius
      a: Math.random(),             // alpha (opacity)
      ad: (Math.random() * 0.02 + 0.01) * (Math.random() < 0.5 ? -1 : 1), // flicker speed/direction
    }));

    function animate() {
      ctx.clearRect(0, 0, w, h);

      stars.forEach((s) => {
        // flicker logic
        s.a += s.ad;
        if (s.a <= 0.1 || s.a >= 1) s.ad *= -1;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.a})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    // handle window resizing
    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none bg-transparent"
    />
  );
}
