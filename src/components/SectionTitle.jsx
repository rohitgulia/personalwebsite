import { useInView, useScramble } from '../hooks.js';

export default function SectionTitle({ index, kicker, title }) {
  const [ref, inView] = useInView({ threshold: 0.6 });
  const k = useScramble(kicker, inView);
  return (
    <div className="section-title" ref={ref}>
      <p className="eyebrow mono">
        <span className="section-title__idx">{index}</span> {k || ' '}
      </p>
      <h2 data-reveal className="reveal-up">{title}</h2>
    </div>
  );
}
