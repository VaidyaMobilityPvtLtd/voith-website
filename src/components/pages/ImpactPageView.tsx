import InteractiveTimeline from "@/components/InteractiveTimeline";
import { getYearsSinceFounding, pageMeta, testimonials, values } from "@/data/content";
import PageShell from "./PageShell";

const meta = pageMeta.impact;

const mission =
  "Continuous sustainable growth and improvement by adapting to the environment and the needs of the country.";
const vision =
  "Pioneering in all industries to flourish and bring prosperity to society — bolstering the standard of living, knowledge, and quality of life for people in Nepal.";

export default function ImpactPageView() {
  const featured = testimonials[0];
  const rest = testimonials.slice(1);

  return (
    <>
      <PageShell
        theme="impact"
        eyebrow={meta.eyebrow}
        title={meta.title}
        description={meta.description}
        stat={`${getYearsSinceFounding()}+`}
        statLabel={meta.statLabel}
      >
        <section className="pg-mvv">
          <article className="pg-mvv-card">
            <span className="pg-mvv-tag">Mission</span>
            <p>{mission}</p>
          </article>
          <article className="pg-mvv-card">
            <span className="pg-mvv-tag">Vision</span>
            <p>{vision}</p>
          </article>
          <article className="pg-mvv-card pg-mvv-card--values">
            <span className="pg-mvv-tag">Values</span>
            <div className="pg-value-chips">
              {values.map((v) => (
                <span key={v}>{v}</span>
              ))}
            </div>
          </article>
        </section>

        <section className="pg-voices">
          <h2 className="pg-section-title">Voices of trust</h2>
          <blockquote className="pg-quote-featured">
            <p>&ldquo;{featured.quote}&rdquo;</p>
            <footer>
              <strong>{featured.author}</strong>
              <span>{featured.role}</span>
            </footer>
          </blockquote>
          <div className="pg-quote-grid">
            {rest.map((t) => (
              <blockquote className="pg-quote-card" key={t.author}>
                <p>&ldquo;{t.quote}&rdquo;</p>
                <footer>
                  <strong>{t.author}</strong>
                  <span>{t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      </PageShell>
      <InteractiveTimeline />
    </>
  );
}
