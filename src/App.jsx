import { useEffect, useState } from 'react';
import Preloader from './components/Preloader.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Stats from './components/Stats.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import { useRevealAll } from './hooks.js';

function CursorGlow() {
  useEffect(() => {
    const el = document.querySelector('.cursor-glow');
    if (!el || window.matchMedia('(pointer: coarse)').matches) return undefined;
    let x = 0, y = 0, tx = 0, ty = 0, raf;
    const move = (e) => { tx = e.clientX; ty = e.clientY; el.style.opacity = 1; };
    const loop = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      el.style.transform = `translate(${x}px, ${y}px)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener('pointermove', move, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener('pointermove', move); cancelAnimationFrame(raf); };
  }, []);
  return <div className="cursor-glow" aria-hidden="true" />;
}

export default function App() {
  const [ready, setReady] = useState(false);
  useRevealAll([ready]);

  useEffect(() => {
    document.body.classList.toggle('is-loading', !ready);
  }, [ready]);

  return (
    <>
      {!ready && <Preloader onDone={() => setReady(true)} />}
      <CursorGlow />
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main>
        <Hero ready={ready} />
        <About />
        <Stats />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
