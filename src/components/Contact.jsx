import { useRef } from 'react';
import { profile } from '../data/resume.js';

function Magnetic({ children, href, className }) {
  const ref = useRef(null);
  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    ref.current.style.transform = `translate(${x * 0.3}px, ${y * 0.4}px)`;
  };
  const leave = () => {
    ref.current.style.transform = '';
  };
  return (
    <a ref={ref} href={href} className={className} onPointerMove={move} onPointerLeave={leave}
      target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
      {children}
    </a>
  );
}

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <p className="eyebrow mono" data-reveal>
        <span className="section-title__idx">05</span> // contact
      </p>
      <h2 className="contact__title" data-reveal>
        <span className="reveal-mask"><span>Let&apos;s build</span></span>
        <span className="reveal-mask"><span className="grad" style={{ '--d': '120ms' }}>something great.</span></span>
      </h2>
      <p className="contact__lede" data-reveal>
        Open to conversations about engineering leadership, AI-driven development, and building teams that ship.
      </p>
      <div className="contact__actions" data-reveal>
        <Magnetic href={`mailto:${profile.email}`} className="orb">
          <span>Say hello</span>
        </Magnetic>
        <div className="contact__links">
          <a href={`mailto:${profile.email}`} className="link-underline">{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link-underline">
            linkedin.com/in/rohitgulia ↗
          </a>
          <span className="muted">{profile.location}</span>
        </div>
      </div>
      <footer className="footer mono">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <a href="#top" className="link-underline">Back to top ↑</a>
      </footer>
    </section>
  );
}
