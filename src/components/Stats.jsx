import SectionTitle from './SectionTitle.jsx';
import { stats } from '../data/resume.js';
import { useCountUp, useInView, spotlight } from '../hooks.js';

function Stat({ value, prefix = '', suffix = '', label, i }) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const n = useCountUp(value, inView, 1600 + i * 150);
  return (
    <div
      ref={ref}
      data-reveal
      className="stat card reveal-up"
      style={{ '--d': `${(i % 3) * 110}ms` }}
      onPointerMove={spotlight}
    >
      <div className="stat__value">
        <span className="stat__affix">{prefix}</span>
        {n}
        <span className="stat__affix grad">{suffix}</span>
      </div>
      <p className="stat__label">{label}</p>
      <svg className="stat__ring" viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="20" cy="20" r="17" pathLength="100" style={{ strokeDashoffset: inView ? 0 : 100 }} />
      </svg>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="section" id="impact">
      <SectionTitle index="02" kicker="// impact" title="Numbers that moved the needle." />
      <div className="stats">
        {stats.map((s, i) => <Stat key={s.label} {...s} i={i} />)}
      </div>
    </section>
  );
}
