import { businesses, globalFeatures, milestones, pageMeta } from "@/data/content";
import PageShell from "./PageShell";

const meta = pageMeta.industries;

export default function IndustriesPageView() {
  return (
    <PageShell
      theme="industries"
      eyebrow={meta.eyebrow}
      title={meta.title}
      description={meta.description}
      stat={meta.stat}
      statLabel={meta.statLabel}
    >
      <section className="pg-sectors">
        <h2 className="pg-section-title">Four core sectors</h2>
        <div className="pg-sector-list">
          {businesses.map((b, i) => (
            <article
              key={b.category}
              className={`pg-sector-row${i % 2 === 1 ? " pg-sector-row--flip" : ""}`}
            >
              <div
                className="pg-sector-mark"
                style={{ background: b.color }}
                aria-hidden="true"
              >
                {b.letter}
              </div>
              <div className="pg-sector-copy">
                <span className="pg-sector-num">0{i + 1}</span>
                <h3>{b.category}</h3>
                <p className="pg-sector-sub">{b.sub}</p>
                <p>{b.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pg-partners">
        <h2 className="pg-section-title pg-section-title--light">Global reach</h2>
        <div className="pg-partner-grid">
          {globalFeatures.map((f) => (
            <div className="pg-partner-card" key={f.title}>
              <span className="pg-partner-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pg-timeline-block">
        <h2 className="pg-section-title">Recent milestones</h2>
        <ol className="pg-milestone-track">
          {milestones.map((m) => (
            <li key={m.title} className="pg-milestone-item">
              <time>{m.date}</time>
              <h3>{m.title}</h3>
              <p>{m.description}</p>
            </li>
          ))}
        </ol>
      </section>
    </PageShell>
  );
}
