import Link from "next/link";
import {
  routes,
  sectorOrder,
  sectorPages,
  sectorPlaceholderImages,
  type SectorSlug,
} from "@/data/content";
import CardMedia from "../CardMedia";
import Reveal from "../Reveal";

type Props = { slug: SectorSlug };

export default function SectorPageView({ slug }: Props) {
  const data = sectorPages[slug];
  const otherSectors = sectorOrder.filter((s) => s !== slug);
  const fallbackImage = sectorPlaceholderImages[slug];

  return (
    <div className={`pg pg-sector pg-sector-${slug}`} style={{ "--sector-color": data.color } as React.CSSProperties}>
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
            <span className="pg-hero-badge-n">{data.stat}</span>
            <span className="pg-hero-badge-l">{data.statLabel}</span>
            <span className="pg-hero-badge-rule" aria-hidden="true" />
          </div>
        </div>
      </header>

      <div className="pg-body">
        <section className="sec-intro">
          <div className="sec-intro-shell">
            <span className="sec-intro-watermark" aria-hidden="true">
              {data.letter}
            </span>
            <div className="sec-intro-head">
              <p className="sec-eyebrow-line">{data.label} · Overview</p>
              <h2 className="sec-intro-title">{data.title}</h2>
            </div>
            <p className="sec-intro-body">{data.intro}</p>
            <ul className="sec-stat-grid" aria-label={`${data.label} highlights`}>
              {data.stats.map((s, i) => (
                <li key={s.label} className="sec-stat-card">
                  <span className="sec-stat-card-n" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="sec-stat-v">{s.value}</span>
                  <span className="sec-stat-l">{s.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="sec-brands">
          <Reveal as="h2" className="pg-section-title">
            Inside the sector
          </Reveal>
          <div className="sec-brand-rows">
            {data.brands.map((b, i) => {
              const href = `${routes.industries}/${slug}/${b.slug}`;
              return (
                <Reveal
                  as="article"
                  key={b.slug}
                  className={`sec-brand-row${i % 2 === 1 ? " sec-brand-row--flip" : ""}`}
                >
                  <Link
                    href={href}
                    className="sec-brand-figure"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{
                      backgroundImage: `url(${b.image ?? fallbackImage})`,
                    }}
                  />
                  <div className="sec-brand-copy">
                    <div className="sec-brand-toprow">
                      <span className="sec-brand-num">
                        0{i + 1} · {data.label}
                      </span>
                      {b.status ? (
                        <span className="sec-brand-status">{b.status}</span>
                      ) : null}
                    </div>
                    <h3>{b.name}</h3>
                    <p className="sec-brand-role">{b.role}</p>
                    <p className="sec-brand-desc">{b.description}</p>
                    <Link href={href} className="sec-brand-cta">
                      Read more <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="sec-highlights">
          <Reveal as="h2" className="pg-section-title pg-section-title--light">
            Highlights
          </Reveal>
          <div className="sec-highlight-grid">
            {data.highlights.map((h, i) => (
              <Reveal
                key={h.title}
                delay={((i % 3) + 1) as 1 | 2 | 3}
                className="sec-highlight-card"
              >
                <h3>{h.title}</h3>
                <p>{h.description}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="sec-closing">
          <Reveal as="p" className="sec-closing-quote">
            {data.closing}
          </Reveal>
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
          <Reveal as="h2" className="pg-section-title">
            Other VOITH sectors
          </Reveal>
          <div className="sec-other-grid">
            {otherSectors.map((s, i) => {
              const o = sectorPages[s];
              return (
                <Reveal
                  key={s}
                  delay={((i % 3) + 1) as 1 | 2 | 3}
                  className="sec-other-reveal"
                >
                  <Link
                    href={`${routes.industries}/${s}`}
                    className="sec-other-card"
                    style={{ "--sector-color": o.color } as React.CSSProperties}
                  >
                    <CardMedia
                      image={o.heroImage}
                      name={o.label}
                      color={o.color}
                      className="sec-other-media"
                    />
                    <div className="sec-other-body">
                      <h3>{o.label}</h3>
                      <p>{o.description}</p>
                      <span className="sec-other-arrow" aria-hidden="true">
                        →
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
