import { useEffect, useState } from 'react';

const LINKS = [
  ['about', 'About'],
  ['impact', 'Impact'],
  ['experience', 'Journey'],
  ['skills', 'Skills'],
  ['contact', 'Contact'],
];

export default function Nav() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? y / max : 0);
      setScrolled(y > 40);
      setHidden(y > last && y > 400);
      last = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    LINKS.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener('scroll', onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <header className={`nav ${hidden && !open ? 'is-hidden' : ''} ${scrolled ? 'is-scrolled' : ''}`}>
        <a href="#top" className="nav__logo" aria-label="Back to top">
          R<span>S</span>G
        </a>
        <button
          className={`nav__toggle ${open ? 'is-open' : ''}`}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <i /><i />
        </button>
        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {LINKS.map(([id, label], i) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'is-active' : ''}
              style={{ '--i': i }}
              onClick={() => setOpen(false)}
            >
              <span className="nav__num">0{i + 1}</span>
              {label}
            </a>
          ))}
        </nav>
      </header>
    </>
  );
}
