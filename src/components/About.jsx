import SectionTitle from './SectionTitle.jsx';
import { profile, education } from '../data/resume.js';

const STEPS = ['Full Stack Developer', 'Software Developer', 'Senior Software Developer', 'Engineering Manager'];

export default function About() {
  return (
    <section className="section about" id="about">
      <SectionTitle index="01" kicker="// about" title="Engineer at heart, leader by craft." />
      <div className="about__grid">
        <div className="about__text">
          <p data-reveal className="reveal-up about__big">{profile.summary}</p>
          <p data-reveal className="reveal-up" style={{ '--d': '120ms' }}>{profile.summaryMore}</p>
          <div data-reveal className="reveal-up about__edu" style={{ '--d': '220ms' }}>
            <span className="mono">EDU</span>
            <div>
              <strong>{education.degree}</strong>
              <span>{education.school} · {education.date}</span>
            </div>
          </div>
        </div>
        <ol className="ladder" aria-label="Career progression">
          {STEPS.map((s, i) => (
            <li key={s} data-reveal className="ladder__step reveal-right" style={{ '--d': `${i * 140}ms`, '--lvl': i }}>
              <span className="mono">0{i + 1}</span>
              {s}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
