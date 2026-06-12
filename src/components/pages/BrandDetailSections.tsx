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
}: {
  detail: BrandDetail;
  /** Omit the intro prose (when the parent renders it before other content). */
  skipIntro?: boolean;
}) {
  return (
    <>
      {!skipIntro && detail.intro && detail.intro.length > 0 ? (
        <section className="brand-detail">
          <Reveal as="p" className="sec-eyebrow-line">
            In Nepal
          </Reveal>
          <div className="brand-detail-prose">
            {detail.intro.map((p, i) => (
              <Reveal as="p" key={i} delay={1}>
                {p}
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      {detail.lineup && detail.lineup.length > 0 ? (
        <section className="brand-lineup">
          <Reveal as="h2" className="pg-section-title">
            {detail.lineupLabel ?? "Available in Nepal"}
          </Reveal>
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
          <Reveal as="h2" className="pg-section-title">
            Services offered
          </Reveal>
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
          <Reveal as="h2" className="pg-section-title">
            {detail.locationsLabel ?? "Find us"}
          </Reveal>
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
                        {/* Some entries list several numbers joined by " · ";
                            dial only the first, but show them all. */}
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
