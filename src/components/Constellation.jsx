import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../hooks.js';

/** A drifting particle network that reaches toward the pointer. */
export default function Constellation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduced = prefersReducedMotion();
    let w = 0;
    let h = 0;
    let dpr = 1;
    let particles = [];
    let raf;
    let running = true;
    const mouse = { x: -9999, y: -9999, active: false };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(110, Math.max(36, (w * h) / 14000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
        hue: Math.random() < 0.5 ? 168 : 258,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const link = Math.min(150, w / 7);
      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        if (!reduced) {
          if (mouse.active) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const d = Math.hypot(dx, dy);
            if (d < 220 && d > 1) {
              p.vx += (dx / d) * 0.012;
              p.vy += (dy / d) * 0.012;
            }
          }
          p.vx *= 0.992;
          p.vy *= 0.992;
          const sp = Math.hypot(p.vx, p.vy);
          if (sp < 0.12) {
            p.vx += (Math.random() - 0.5) * 0.04;
            p.vy += (Math.random() - 0.5) * 0.04;
          }
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < -20) p.x = w + 20;
          if (p.x > w + 20) p.x = -20;
          if (p.y < -20) p.y = h + 20;
          if (p.y > h + 20) p.y = -20;
        }
        for (let j = i + 1; j < particles.length; j += 1) {
          const q = particles[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < link) {
            ctx.strokeStyle = `hsla(${p.hue}, 80%, 72%, ${(1 - d / link) * 0.22})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
        if (mouse.active) {
          const d = Math.hypot(p.x - mouse.x, p.y - mouse.y);
          if (d < 180) {
            ctx.strokeStyle = `hsla(${p.hue}, 90%, 75%, ${(1 - d / 180) * 0.5})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
        ctx.fillStyle = `hsla(${p.hue}, 90%, 78%, 0.9)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      if (running && !reduced) raf = requestAnimationFrame(draw);
    };

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      mouse.active = mouse.y > 0 && mouse.y < r.height;
    };
    const onLeave = () => {
      mouse.active = false;
    };

    // Pause when the hero scrolls out of view.
    const io = new IntersectionObserver(([entry]) => {
      const wasRunning = running;
      running = entry.isIntersecting;
      if (running && !wasRunning && !reduced) raf = requestAnimationFrame(draw);
    });
    io.observe(canvas);

    resize();
    draw();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="constellation" aria-hidden="true" />;
}
