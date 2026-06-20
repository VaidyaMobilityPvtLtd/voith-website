import type { BrandDetail } from "@/data/content";
import Reveal from "../Reveal";

const stagger = (i: number) => (((i % 3) + 1) as 1 | 2 | 3);

/**
 * Renders the rich detail sections (overview prose, lineup, services,
 * locations) shared by company pages (leaf nodes) and child-brand pages.
 */
export default function BrandDetailSections({
  detail,
  skipIntro = false,
  skipStats = false,
}: {
  detail: BrandDetail;
  /** Omit the intro prose (when the parent renders it before other content). */
  skipIntro?: boolean;
  /** Omit stats when shown in the overview hero section. */
  skipStats?: boolean;
}) {
  return (
    <>
      {!skipIntro && detail.intro && detail.intro.length > 0 ? (
        <section className="brand-detail">
          <div className="brand-section-head">
            <Reveal as="p" className="sec-eyebrow-line">
              In Nepal
            </Reveal>
            <Reveal as="h2" className="brand-section-title" delay={1}>
              Overview
            </Reveal>
          </div>
          <div className="brand-detail-card">
            <div className="brand-detail-prose">
              {detail.intro.map((p, i) => (
                <Reveal as="p" key={i} delay={1}>
                  {p}
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {!skipStats && detail.stats && detail.stats.length > 0 ? (
        <section className="brand-stats">
          <div className="brand-section-head">
            <Reveal as="p" className="sec-eyebrow-line">
              At a glance
            </Reveal>
            <Reveal as="h2" className="brand-section-title" delay={1}>
              Key figures
            </Reveal>
          </div>
          <ul className="sec-stat-grid" aria-label="Key figures">
            {detail.stats.map((stat, i) => (
              <li key={stat.label} className="sec-stat-card">
                <span className="sec-stat-card-n" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="sec-stat-v">{stat.value}</span>
                <span className="sec-stat-l">{stat.label}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {detail.highlights && detail.highlights.length > 0 ? (
        <section className="brand-highlights sec-highlights">
          <div className="brand-section-head brand-section-head--light">
            <Reveal as="p" className="sec-eyebrow-line">
              Highlights
            </Reveal>
            <Reveal as="h2" className="brand-section-title brand-section-title--light" delay={1}>
              What sets us apart
            </Reveal>
          </div>
          <div className="sec-highlight-grid">
            {detail.highlights.map((item, i) => (
              <Reveal
                key={item.title}
                delay={stagger(i)}
                className="sec-highlight-card"
              >
                <span className="brand-highlight-n" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      {detail.lineup && detail.lineup.length > 0 ? (
        <section className="brand-lineup">
          <div className="brand-section-head">
            <Reveal as="p" className="sec-eyebrow-line">
              Lineup
            </Reveal>
            <Reveal as="h2" className="brand-section-title" delay={1}>
              {detail.lineupLabel ?? "Available in Nepal"}
            </Reveal>
          </div>
          <div className="brand-lineup-grid">
            {detail.lineup.map((group, i) => (
              <Reveal
                key={group.category}
                delay={stagger(i)}
                className="brand-lineup-group"
              >
                <h3 className="brand-lineup-cat">{group.category}</h3>
                <ul className="brand-lineup-items">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      {detail.services && detail.services.length > 0 ? (
        <section className="brand-services">
          <div className="brand-section-head">
            <Reveal as="p" className="sec-eyebrow-line">
              Services
            </Reveal>
            <Reveal as="h2" className="brand-section-title" delay={1}>
              What we offer
            </Reveal>
          </div>
          <ul className="brand-services-grid">
            {detail.services.map((s, i) => (
              <Reveal
                as="li"
                key={s}
                delay={stagger(i)}
                className="brand-service-item"
              >
                <span className="brand-service-dot" aria-hidden="true" />
                {s}
              </Reveal>
            ))}
          </ul>
        </section>
      ) : null}

      {detail.locations && detail.locations.length > 0 ? (
        <section className="brand-locations">
          <div className="brand-section-head">
            <Reveal as="p" className="sec-eyebrow-line">
              Locations
            </Reveal>
            <Reveal as="h2" className="brand-section-title" delay={1}>
              {detail.locationsLabel ?? "Find us"}
            </Reveal>
          </div>
          <div className="brand-loc-grid">
            {detail.locations.map((loc, i) => (
              <Reveal
                key={loc.name}
                delay={stagger(i)}
                className="brand-loc-card"
              >
                {loc.kind ? (
                  <span className="brand-loc-kind">{loc.kind}</span>
                ) : null}
                <h3 className="brand-loc-name">{loc.name}</h3>
                {loc.address ? (
                  <p className="brand-loc-addr">{loc.address}</p>
                ) : null}
                <dl className="brand-loc-meta">
                  {loc.hours ? (
                    <div>
                      <dt>Hours</dt>
                      <dd>{loc.hours}</dd>
                    </div>
                  ) : null}
                  {loc.phone ? (
                    <div>
                      <dt>Phone</dt>
                      <dd>
                        <a
                          href={`tel:${loc.phone
                            .split("·")[0]
                            .replace(/[^\d+]/g, "")}`}
                        >
                          {loc.phone}
                        </a>
                      </dd>
                    </div>
                  ) : null}
                  {loc.email ? (
                    <div>
                      <dt>Email</dt>
                      <dd>
                        <a href={`mailto:${loc.email}`}>{loc.email}</a>
                      </dd>
                    </div>
                  ) : null}
                </dl>
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
