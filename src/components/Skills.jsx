import SectionTitle from './SectionTitle.jsx';
import { skills } from '../data/resume.js';

function tilt(e) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5;
  const y = (e.clientY - r.top) / r.height - 0.5;
  el.style.setProperty('--rx', `${-y * 10}deg`);
  el.style.setProperty('--ry', `${x * 12}deg`);
  el.style.setProperty('--mx', `${e.clientX - r.left}px`);
  el.style.setProperty('--my', `${e.clientY - r.top}px`);
}
function untilt(e) {
  e.currentTarget.style.setProperty('--rx', '0deg');
  e.currentTarget.style.setProperty('--ry', '0deg');
}

function Marquee({ items, reverse }) {
  const row = [...items, ...items];
  return (
    <div className={`marquee ${reverse ? 'marquee--rev' : ''}`} aria-hidden="true">
      <div className="marquee__track">
        {row.map((s, i) => <span key={i} className="marquee__item">{s}<b>✦</b></span>)}
      </div>
    </div>
  );
}

export default function Skills() {
  const half = Math.ceil(skills.technical.length / 2);
  return (
    <section className="section skills" id="skills">
      <SectionTitle index="04" kicker="// toolkit" title="Leading people. Shipping systems." />
      <div className="skills__grid">
        {skills.leadership.map((s, i) => (
          <div
            key={s}
            data-reveal
            className="skill card reveal-up"
            style={{ '--d': `${(i % 4) * 90}ms` }}
            onPointerMove={tilt}
            onPointerLeave={untilt}
          >
            <span className="mono skill__idx">L/{String(i + 1).padStart(2, '0')}</span>
            <p>{s}</p>
          </div>
        ))}
      </div>
      <p className="sr-only">Technical skills: {skills.technical.join(', ')}</p>
      <div className="skills__marquees">
        <Marquee items={skills.technical.slice(0, half)} />
        <Marquee items={skills.technical.slice(half)} reverse />
      </div>
    </section>
  );
}
