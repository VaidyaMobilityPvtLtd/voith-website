import Link from "next/link";
import { routes, sectorOrder, sectorPages, type SectorSlug } from "@/data/content";

type Props = { slug: SectorSlug };

export default function SectorPageView({ slug }: Props) {
  const data = sectorPages[slug];
  const otherSectors = sectorOrder.filter((s) => s !== slug);

  return (
    <div className="pg pg-sector" style={{ "--sector-color": data.color } as React.CSSProperties}>
      <header className="pg-hero sec-hero">
        <div
          className="pg-hero-bg"
          style={{ backgroundImage: `url(${data.heroImage})` }}
          aria-hidden="true"
        />
        <div className="pg-hero-shade" aria-hidden="true" />
        <div className="pg-hero-content">
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
          <div className="pg-hero-badge">
            <span className="pg-hero-badge-rule" aria-hidden="true" />
            <span
              className="pg-hero-badge-mark"
              style={{ background: data.color }}
              aria-hidden="true"
            >
              {data.letter}
            </span>
            <span className="pg-hero-badge-n">{data.stat}</span>
            <span className="pg-hero-badge-l">{data.statLabel}</span>
            <span className="pg-hero-badge-rule" aria-hidden="true" />
          </div>
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
          <div className="sec-brand-rows">
            {data.brands.map((b, i) => {
              const href = `${routes.industries}/${slug}/${b.slug}`;
              return (
                <article
                  key={b.slug}
                  className={`sec-brand-row${i % 2 === 1 ? " sec-brand-row--flip" : ""}`}
                >
                  <Link
                    href={href}
                    className="sec-brand-figure"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <span className="sec-brand-blob">
                      <span className="sec-brand-blob-mark">{b.mark}</span>
                    </span>
                  </Link>
                  <div className="sec-brand-copy">
                    <span className="sec-brand-num">
                      0{i + 1} · {data.label}
                    </span>
                    <h3>{b.name}</h3>
                    <p className="sec-brand-role">{b.role}</p>
                    <p className="sec-brand-desc">{b.description}</p>
                    <Link href={href} className="sec-brand-cta">
                      Read more <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              );
            })}
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
