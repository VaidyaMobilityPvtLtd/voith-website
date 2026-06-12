import Link from "next/link";
import {
  businesses,
  globalFeatures,
  industryDropdown,
  milestones,
  pageMeta,
  routes,
  sectorPages,
  sectorPlaceholderImages,
  type SectorSlug,
} from "@/data/content";
import PageShell from "./PageShell";
import Reveal from "../Reveal";

const meta = pageMeta.industries;

const slugByCategory = industryDropdown.reduce<Record<string, SectorSlug>>(
  (acc, item) => {
    acc[item.label] = item.slug;
    return acc;
  },
  {},
);

export default function IndustriesPageView() {
  return (
    <PageShell
      theme="industries"
      eyebrow={meta.eyebrow}
      title={meta.title}
      description={meta.description}
      stat={meta.stat}
      statLabel={meta.statLabel}
      heroImage={meta.heroImage}
    >
      <section className="ind-sectors">
        <Reveal as="h2" className="pg-section-title">
          Four core sectors
        </Reveal>
        <div className="ind-sector-stack">
          {businesses.map((b, i) => {
            const slug = slugByCategory[b.category];
            const sector = slug ? sectorPages[slug] : undefined;
            const companies = sector?.brands ?? [];
            const image =
              (slug ? sectorPlaceholderImages[slug] : undefined) ?? b.image;
            return (
              <Reveal
                as="article"
                key={b.category}
                className={`ind-sector${i % 2 === 1 ? " ind-sector--flip" : ""}`}
                style={{ "--sector-color": b.color } as React.CSSProperties}
              >
                <div
                  className="ind-sector-media"
                  style={{ backgroundImage: `url(${image})` }}
                >
                  <span className="ind-sector-index" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <span
                    className="ind-sector-badge"
                    style={{ background: b.color }}
                    aria-hidden="true"
                  >
                    {b.letter}
                  </span>
                  {companies.length > 0 ? (
                    <span className="ind-sector-count">
                      {companies.length}{" "}
                      {companies.length === 1 ? "company" : "companies"}
                    </span>
                  ) : null}
                </div>

                <div className="ind-sector-main">
                  <div className="ind-sector-head">
                    <h3 className="ind-sector-title">{b.category}</h3>
                    <p className="ind-sector-sub">{b.sub}</p>
                    <p className="ind-sector-desc">{b.description}</p>
                    {slug ? (
                      <Link
                        href={`${routes.industries}/${slug}`}
                        className="ind-sector-link"
                      >
                        Explore {b.category}
                        <span aria-hidden="true">→</span>
                      </Link>
                    ) : null}
                  </div>

                  {companies.length > 0 && slug ? (
                    <div className="ind-company-grid">
                      {companies.map((c) => {
                        const kids = c.children ?? [];
                        return (
                          <Link
                            key={c.slug}
                            href={`${routes.industries}/${slug}/${c.slug}`}
                            className="ind-company-card"
                          >
                            <span
                              className="ind-company-mark"
                              style={{ background: b.color }}
                              aria-hidden="true"
                            >
                              {c.mark}
                            </span>
                            <div className="ind-company-body">
                              <h4 className="ind-company-name">
                                {c.name}
                                {c.comingSoon ? (
                                  <span className="ind-soon">Soon</span>
                                ) : null}
                              </h4>
                              <p className="ind-company-role">{c.role}</p>
                              {kids.length > 0 ? (
                                <div className="ind-chips">
                                  {kids.slice(0, 4).map((k) => (
                                    <span key={k.slug} className="ind-chip">
                                      {k.name}
                                    </span>
                                  ))}
                                  {kids.length > 4 ? (
                                    <span className="ind-chip ind-chip--more">
                                      +{kids.length - 4}
                                    </span>
                                  ) : null}
                                </div>
                              ) : null}
                            </div>
                            <span className="ind-company-arrow" aria-hidden="true">
                              →
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="pg-partners">
        <Reveal as="h2" className="pg-section-title pg-section-title--light">
          Global reach
        </Reveal>
        <div className="pg-partner-grid">
          {globalFeatures.map((f, i) => (
            <Reveal
              key={f.title}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              className="pg-partner-card"
            >
              <span className="pg-partner-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pg-timeline-block">
        <Reveal as="h2" className="pg-section-title">
          Recent milestones
        </Reveal>
        <ol className="pg-milestone-track">
          {milestones.map((m, i) => (
            <Reveal
              as="li"
              key={m.title}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              className="pg-milestone-item"
            >
              <time>{m.date}</time>
              <h3>{m.title}</h3>
              <p>{m.description}</p>
            </Reveal>
          ))}
        </ol>
      </section>
    </PageShell>
  );
}
