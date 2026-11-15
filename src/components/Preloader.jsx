import { useEffect, useState } from 'react';
import { prefersReducedMotion } from '../hooks.js';

/** Short intro: a counter runs to 100, then a curtain lifts. */
export default function Preloader({ onDone }) {
  const [n, setN] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      onDone();
      return undefined;
    }
    let raf;
    const t0 = performance.now();
    const dur = 1300;
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / dur);
      setN(Math.round(100 * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setLeaving(true);
        setTimeout(onDone, 900);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`preloader ${leaving ? 'is-leaving' : ''}`} aria-hidden="true">
      <div className="preloader__mark">
        {'RSG'.split('').map((c, i) => (
          <span key={c} style={{ animationDelay: `${i * 120}ms` }}>{c}</span>
        ))}
      </div>
      <div className="preloader__bar"><i style={{ transform: `scaleX(${n / 100})` }} /></div>
      <div className="preloader__count">{String(n).padStart(3, '0')}</div>
    </div>
  );
}
