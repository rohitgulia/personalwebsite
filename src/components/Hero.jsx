import { useEffect, useState } from 'react';
import Constellation from './Constellation.jsx';
import { profile } from '../data/resume.js';
import { useScramble, prefersReducedMotion } from '../hooks.js';

function Letters({ text, delay = 0, gradient = false }) {
  const n = text.length;
  return (
    <span className="letters" aria-label={text}>
      {text.split('').map((c, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`letter ${gradient ? 'letter--grad' : ''}`}
          style={{ animationDelay: `${delay + i * 45}ms`, '--i': i, '--n': n }}
        >
          {c === ' ' ? ' ' : c}
        </span>
      ))}
    </span>
  );
}

export default function Hero({ ready }) {
  const [roleIdx, setRoleIdx] = useState(0);
  const role = useScramble(profile.roles[roleIdx], ready);

  useEffect(() => {
    if (!ready || prefersReducedMotion()) return undefined;
    const id = setInterval(() => setRoleIdx((i) => (i + 1) % profile.roles.length), 3200);
    return () => clearInterval(id);
  }, [ready]);

  return (
    <section className={`hero ${ready ? 'is-ready' : ''}`} id="top">
      <Constellation />
      <div className="aurora" aria-hidden="true"><i /><i /><i /></div>
      <div className="hero__inner">
        <p className="eyebrow hero__eyebrow">
          <span className="pulse" /> Currently {profile.title} at {profile.company}
        </p>
        {ready && (
          <h1 className="hero__name">
            <Letters text={profile.firstName} delay={150} />
            <br />
            <Letters text={profile.lastName} delay={450} gradient />
          </h1>
        )}
        <p className="hero__role mono" aria-live="polite">
          <span className="hero__prompt">&gt;</span> {role}
          <span className="caret" />
        </p>
        <p className="hero__lede">
          10+ years turning ambitious ideas into products for <strong>50M+ devices</strong>, and
          growing the teams that build them.
        </p>
        <div className="hero__cta">
          <a href="#experience" className="btn btn--primary"><span>Explore my journey</span></a>
          <a href={`mailto:${profile.email}`} className="btn btn--ghost"><span>Get in touch</span></a>
        </div>
      </div>
      <a href="#about" className="scroll-cue" aria-label="Scroll to about">
        <span className="scroll-cue__wheel" />
      </a>
    </section>
  );
}
