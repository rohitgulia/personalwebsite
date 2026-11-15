import { useEffect, useRef, useState } from 'react';
import SectionTitle from './SectionTitle.jsx';
import { experience } from '../data/resume.js';
import { spotlight } from '../hooks.js';

function Job({ job, i }) {
  const [open, setOpen] = useState(i < 2);
  return (
    <li className={`job ${job.current ? 'is-current' : ''}`} data-reveal style={{ '--d': '0ms' }}>
      <span className="job__dot" aria-hidden="true" />
      <div className="job__when mono reveal-fade">
        {job.start} — {job.end}
      </div>
      <article className="job__card card reveal-up" onPointerMove={spotlight}>
        <header>
          <h3>{job.role}</h3>
          <p className="job__company">
            <span className="grad">{job.company}</span> · {job.place}
            {job.current && <span className="badge">Now</span>}
          </p>
        </header>
        <p className="job__intro">{job.intro}</p>
        <div className={`job__more ${open ? 'is-open' : ''}`}>
          <div>
            <ul>
              {job.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        </div>
        <footer>
          <div className="tags">
            {job.tags.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
          <button className="job__toggle mono" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
            {open ? '− less' : '+ details'}
          </button>
        </footer>
      </article>
    </li>
  );
}

export default function Experience() {
  const listRef = useRef(null);
  const [fill, setFill] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = listRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const mid = window.innerHeight * 0.55;
      setFill(Math.max(0, Math.min(1, (mid - r.top) / r.height)));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section className="section" id="experience">
      <SectionTitle index="03" kicker="// journey" title="A decade of building, leading, shipping." />
      <ol className="timeline" ref={listRef}>
        <span className="timeline__track" aria-hidden="true">
          <i style={{ transform: `scaleY(${fill})` }} />
        </span>
        {experience.map((job, i) => <Job key={job.role + job.start} job={job} i={i} />)}
      </ol>
    </section>
  );
}
