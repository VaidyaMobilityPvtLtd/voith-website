import Reveal from "./Reveal";
import { testimonials } from "@/data/content";

function authorInitials(name: string) {
  const cleaned = name.replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.)\s*/i, "").trim();
  const parts = cleaned.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return (parts[0]?.slice(0, 2) ?? "").toUpperCase();
}

export default function Testimonials() {
  return (
    <section id="impact">
      <div className="test-wrap">
        <div className="test-head-block">
          <Reveal className="sh">
            <span className="sn">Voices</span>
            <h2>What People Say</h2>
          </Reveal>
          <Reveal className="test-lead-wrap" delay={1}>
            <p className="test-lead">
              Partners, institutions, and leaders who have worked with VOITH across Nepal.
            </p>
          </Reveal>
        </div>

        <div className="test-grid">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.author}
              className="test-c-reveal"
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
            >
              <article
                className="test-c"
                data-index={String(i + 1).padStart(2, "0")}
              >
                <blockquote className="test-quote">
                  <p>{t.quote}</p>
                </blockquote>
                <footer className="test-cite">
                  <span className="test-avatar" aria-hidden="true">
                    {authorInitials(t.author)}
                  </span>
                  <div className="test-cite-meta">
                    <strong>{t.author}</strong>
                    <span>{t.role}</span>
                  </div>
                </footer>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
