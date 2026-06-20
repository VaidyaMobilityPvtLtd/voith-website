import ImpactTimeline from "@/components/ImpactTimeline";
import { getYearsSinceFounding, pageMeta, testimonials, values } from "@/data/content";
import PageShell from "./PageShell";

const meta = pageMeta.impact;

const mission =
  "Continuous sustainable growth and improvement by adapting to the environment and the needs of the country.";
const vision =
  "Pioneering in all industries to flourish and bring prosperity to society, bolstering the standard of living, knowledge, and quality of life for people in Nepal.";

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
        heroImage={meta.heroImage}
      >
        <section className="pg-mvv">
          <article className="pg-mvv-card" data-num="01">
            <div className="pg-mvv-head">
              <span className="pg-mvv-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="4.5" />
                  <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
                </svg>
              </span>
              <h3 className="pg-mvv-tag">Mission</h3>
            </div>
            <p>{mission}</p>
          </article>
          <article className="pg-mvv-card" data-num="02">
            <div className="pg-mvv-head">
              <span className="pg-mvv-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </span>
              <h3 className="pg-mvv-tag">Vision</h3>
            </div>
            <p>{vision}</p>
          </article>
          <article className="pg-mvv-card pg-mvv-card--values" data-num="03">
            <div className="pg-mvv-head">
              <span className="pg-mvv-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l2.6 5.7 6.2.6-4.6 4.2 1.3 6.1L12 17l-5.5 2.8 1.3-6.1L3.2 9.3l6.2-.6z" />
                </svg>
              </span>
              <h3 className="pg-mvv-tag">Values</h3>
            </div>
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
            <div className="pg-quote-video">
              <video
                className="pg-quote-video-el"
                src="/DrToyoda.mp4"
                poster="/dr-toyoda-poster.jpg"
                controls
                playsInline
                preload="none"
                controlsList="nodownload"
              />
            </div>
            <div className="pg-quote-featured-main">
              <p>&ldquo;{featured.quote}&rdquo;</p>
              <footer>
                <strong>{featured.author}</strong>
                <span>{featured.role}</span>
              </footer>
            </div>
          </blockquote>
          <div className="pg-voices-more">
            <div className="vm-side">
              <span className="vm-eyebrow">
                <span className="vm-eyebrow-dot" aria-hidden="true" />
                Testimonials
              </span>
              <h3 className="vm-title">More Voices</h3>
              <p className="vm-lead">
                Leaders, partners, and institutions on what it means to work alongside VOITH.
              </p>
            </div>
            <ol className="vm-list">
              {rest.map((t, i) => (
                <li className="vm-item" key={t.author}>
                  <span className="vm-num">{String(i + 2).padStart(2, "0")}</span>
                  <div className="vm-content">
                    <p className="vm-quote">&ldquo;{t.quote}&rdquo;</p>
                    <p className="vm-meta">
                      <strong>{t.author}</strong>
                      <span>{t.role}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </PageShell>
      <ImpactTimeline />
    </>
  );
}
