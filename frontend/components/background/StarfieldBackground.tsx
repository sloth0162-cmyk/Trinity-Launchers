"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  speed: number;
}

interface OrbitalRing {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
}

export default function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const starsRef = useRef<Star[]>([]);
  const orbitalsRef = useRef<OrbitalRing[]>([]);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Generate stars
    const starCount = Math.min(180, Math.floor(window.innerWidth / 8));
    starsRef.current = Array.from({ length: starCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.1 + 0.2,
      opacity: Math.random() * 0.45 + 0.05,
      speed: Math.random() * 0.015 + 0.005,
    }));

    // Generate orbital rings (very subtle)
    orbitalsRef.current = [
      {
        cx: canvas.width * 0.78,
        cy: canvas.height * 0.18,
        rx: 160,
        ry: 60,
        rotation: 0,
        rotationSpeed: 0.0003,
        opacity: 0.04,
      },
      {
        cx: canvas.width * 0.78,
        cy: canvas.height * 0.18,
        rx: 250,
        ry: 95,
        rotation: Math.PI / 6,
        rotationSpeed: -0.0002,
        opacity: 0.025,
      },
      {
        cx: canvas.width * 0.12,
        cy: canvas.height * 0.7,
        rx: 120,
        ry: 45,
        rotation: 0,
        rotationSpeed: 0.00025,
        opacity: 0.03,
      },
    ];

    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      starsRef.current.forEach((star) => {
        // Subtle twinkle
        const twinkle = reducedMotion.current
          ? star.opacity
          : star.opacity * (0.8 + 0.2 * Math.sin(t * star.speed * 60));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 230, 225, ${twinkle})`;
        ctx.fill();
      });

      // Draw grid lines (very faint)
      const gridSpacing = 80;
      ctx.strokeStyle = "rgba(140, 170, 150, 0.028)";
      ctx.lineWidth = 0.5;
      for (let x = 0; x < canvas.width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw orbital rings
      orbitalsRef.current.forEach((ring) => {
        if (!reducedMotion.current) {
          ring.rotation += ring.rotationSpeed;
        }
        ctx.save();
        ctx.translate(ring.cx, ring.cy);
        ctx.rotate(ring.rotation);
        ctx.beginPath();
        ctx.ellipse(0, 0, ring.rx, ring.ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(143, 174, 149, ${ring.opacity})`;
        ctx.lineWidth = 0.75;
        ctx.stroke();
        ctx.restore();
      });

      t += 0.016;
      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 1 }}
      aria-hidden="true"
    />
  );
}
