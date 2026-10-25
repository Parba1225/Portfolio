import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Drifting network mesh that reacts to the pointer.
export default function Background() {
  const ref = useRef(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cv = ref.current, cx = cv.getContext("2d");
    const m = { x: -999, y: -999 }, dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0, H = 0, pts = [];
    const size = () => {
      W = innerWidth; H = innerHeight;
      cv.width = W * dpr; cv.height = H * dpr; cx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(Math.max(Math.round((W * H) / 15000), 28), 90);
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4, r: Math.random() * 1.4 + 0.8,
      }));
    };
    const onMove = (e) => { m.x = e.clientX; m.y = e.clientY; };
    const draw = () => {
      cx.clearRect(0, 0, W, H);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        const dm = Math.hypot(p.x - m.x, p.y - m.y);
        if (dm < 170) {
          p.x += (m.x - p.x) * 0.004; p.y += (m.y - p.y) * 0.004;
          cx.strokeStyle = `rgba(255,184,28,${(1 - dm / 170) * 0.55})`;
          cx.beginPath(); cx.moveTo(p.x, p.y); cx.lineTo(m.x, m.y); cx.stroke();
        }
        cx.fillStyle = "rgba(45,212,191,.7)";
        cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, 6.283); cx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j], d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 135) {
            cx.strokeStyle = `rgba(45,212,191,${(1 - d / 135) * 0.25})`;
            cx.beginPath(); cx.moveTo(p.x, p.y); cx.lineTo(q.x, q.y); cx.stroke();
          }
        }
      }
    };
    size();
    addEventListener("resize", size);
    addEventListener("pointermove", onMove);
    gsap.ticker.add(draw);
    return () => {
      removeEventListener("resize", size);
      removeEventListener("pointermove", onMove);
      gsap.ticker.remove(draw);
    };
  }, []);
  return <canvas id="bg" ref={ref} aria-hidden="true" />;
}
