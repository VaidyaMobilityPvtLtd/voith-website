import Reveal from "./Reveal";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  return (
    <section id="impact">
      <Reveal className="sh">
        <span className="sn">Voices</span>
        <h2>What People Say</h2>
      </Reveal>
      <Reveal className="test-grid">
        {testimonials.map((t) => (
          <div className="test-c" key={t.author}>
            <div className="test-q">&ldquo;</div>
            <blockquote>{t.quote}</blockquote>
            <cite className="test-cite">
              <strong>{t.author}</strong>
              <span>{t.role}</span>
            </cite>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
