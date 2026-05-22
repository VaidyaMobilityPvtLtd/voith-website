import Link from "next/link";
import { routes, sectorOrder, sectorPages, type SectorSlug } from "@/data/content";

type Props = { slug: SectorSlug };

export default function SectorPageView({ slug }: Props) {
  const data = sectorPages[slug];
  const otherSectors = sectorOrder.filter((s) => s !== slug);

  return (
    <div className="pg pg-sector" style={{ "--sector-color": data.color } as React.CSSProperties}>
      <header className="pg-hero sec-hero">
        <div className="pg-hero-inner">
          <nav className="pg-crumb" aria-label="Breadcrumb">
            <Link href={routes.home}>Home</Link>
            <span aria-hidden="true">/</span>
            <Link href={routes.industries}>Industries</Link>
            <span aria-hidden="true">/</span>
            <span>{data.label}</span>
          </nav>
          <p className="pg-eyebrow">{data.eyebrow}</p>
          <h1 className="pg-title">{data.title}</h1>
          <p className="pg-lead">{data.description}</p>
        </div>
        <div className="pg-hero-aside sec-hero-aside">
          <div className="sec-mark" aria-hidden="true">
            {data.letter}
          </div>
          <span className="pg-stat-n">{data.stat}</span>
          <span className="pg-stat-l">{data.statLabel}</span>
        </div>
      </header>

      <div className="pg-body">
        <section className="sec-intro">
          <div className="sec-intro-grid">
            <div>
              <p className="sec-eyebrow-line">{data.label} · Overview</p>
              <h2 className="pg-section-title">{data.intro.split(".")[0]}.</h2>
            </div>
            <p className="sec-intro-body">{data.intro}</p>
          </div>
          <div className="sec-stat-row">
            {data.stats.map((s) => (
              <div key={s.label} className="sec-stat-cell">
                <span className="sec-stat-v">{s.value}</span>
                <span className="sec-stat-l">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="sec-brands">
          <h2 className="pg-section-title">Inside the sector</h2>
          <div className="sec-brand-grid">
            {data.brands.map((b, i) => (
              <article key={b.name} className="sec-brand-card">
                <span className="sec-brand-num">0{i + 1}</span>
                <h3>{b.name}</h3>
                <p className="sec-brand-role">{b.role}</p>
                <p className="sec-brand-desc">{b.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="sec-highlights">
          <h2 className="pg-section-title pg-section-title--light">Highlights</h2>
          <div className="sec-highlight-grid">
            {data.highlights.map((h) => (
              <div key={h.title} className="sec-highlight-card">
                <h3>{h.title}</h3>
                <p>{h.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sec-closing">
          <p className="sec-closing-quote">{data.closing}</p>
          <div className="sec-closing-actions">
            <Link href={routes.industries} className="sec-cta sec-cta--solid">
              ← All Industries
            </Link>
            <Link href="/#businesses" className="sec-cta">
              Explore businesses
            </Link>
          </div>
        </section>

        <section className="sec-other">
          <h2 className="pg-section-title">Other VOITH sectors</h2>
          <div className="sec-other-grid">
            {otherSectors.map((s) => {
              const o = sectorPages[s];
              return (
                <Link
                  key={s}
                  href={`${routes.industries}/${s}`}
                  className="sec-other-card"
                >
                  <span
                    className="sec-other-mark"
                    style={{ background: o.color }}
                    aria-hidden="true"
                  >
                    {o.letter}
                  </span>
                  <div>
                    <h3>{o.label}</h3>
                    <p>{o.description}</p>
                  </div>
                  <span className="sec-other-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
