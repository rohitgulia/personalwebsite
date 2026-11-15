import { useEffect, useRef, useState } from 'react';

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Adds `is-visible` to every [data-reveal] element once it scrolls into view. */
export function useRevealAll(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]:not(.is-visible)');
    if (!('IntersectionObserver' in window) || prefersReducedMotion()) {
      els.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

/** True once the element has entered the viewport. */
export function useInView(options = { threshold: 0.3 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return undefined;
    }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        io.disconnect();
      }
    }, options);
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [ref, inView];
}

/** Animates a number from 0 to `target` once `start` is true. */
export function useCountUp(target, start, duration = 1800) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return undefined;
    if (prefersReducedMotion()) {
      setValue(target);
      return undefined;
    }
    let raf;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 4);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return value;
}

const GLYPHS = '!<>-_\\/[]{}—=+*^?#01';

/** Scrambles text into `text`, re-running whenever `trigger` changes. */
export function useScramble(text, trigger = true, speed = 1) {
  const [out, setOut] = useState(trigger ? '' : text);
  useEffect(() => {
    if (!trigger) return undefined;
    if (prefersReducedMotion()) {
      setOut(text);
      return undefined;
    }
    let frame = 0;
    let raf;
    const queue = [...text].map((ch, i) => ({
      ch,
      start: Math.floor(Math.random() * 12 + i * 0.8 * speed),
      end: Math.floor(Math.random() * 14 + 14 + i * 1.2 * speed),
    }));
    const tick = () => {
      let done = 0;
      const s = queue
        .map(({ ch, start, end }) => {
          if (frame >= end) {
            done += 1;
            return ch;
          }
          if (frame >= start && ch !== ' ') return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          return ch === ' ' ? ' ' : ' ';
        })
        .join('');
      setOut(s);
      frame += 1;
      if (done < queue.length) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [text, trigger, speed]);
  return out;
}

/** Sets --mx/--my on an element so CSS can draw a spotlight that follows the pointer. */
export function spotlight(e) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
}
