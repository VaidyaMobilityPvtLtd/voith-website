import Link from "next/link";
import {
  routes,
  sectorPages,
  sectorPlaceholderImages,
  type SectorSlug,
} from "@/data/content";
import BrandDetailSections from "./BrandDetailSections";
import CardMedia from "../CardMedia";
import Reveal from "../Reveal";

type Props = { slug: SectorSlug; companySlug: string; brandSlug: string };

export default function BrandPageView({ slug, companySlug, brandSlug }: Props) {
  const data = sectorPages[slug];
  const company = data.brands.find((b) => b.slug === companySlug);
  const brand = company?.children?.find((c) => c.slug === brandSlug);
  if (!company || !brand) return null;

  const siblings = (company.children ?? []).filter((c) => c.slug !== brandSlug);
  const detail = brand.detail;
  const companyBase = `${routes.industries}/${slug}/${company.slug}`;
  const fallbackImage = sectorPlaceholderImages[slug];
  const hasOverviewStats = Boolean(detail?.stats && detail.stats.length > 0);

  return (
    <div
      className="pg pg-brand"
      style={{ "--sector-color": data.color } as React.CSSProperties}
    >
      <header className="pg-hero brand-hero">
        <div
          className="brand-hero-bg"
          aria-hidden="true"
          style={{ backgroundImage: `url(${brand.image ?? fallbackImage})` }}
        />
        <div className="brand-hero-shade" aria-hidden="true" />
        <div className="pg-hero-content">
          <nav className="pg-crumb" aria-label="Breadcrumb">
            <Link href={routes.home}>Home</Link>
            <span aria-hidden="true">/</span>
            <Link href={routes.industries}>Industries</Link>
            <span aria-hidden="true">/</span>
            <Link href={`${routes.industries}/${slug}`}>{data.label}</Link>
            <span aria-hidden="true">/</span>
            <Link href={companyBase}>{company.name}</Link>
            <span aria-hidden="true">/</span>
            <span>{brand.name}</span>
          </nav>
          <Reveal as="h1" className="pg-title">
            {brand.name}
          </Reveal>
          <Reveal as="p" className="brand-hero-role" delay={1}>
            {brand.role}
          </Reveal>
        </div>
      </header>

      <div className="pg-body">
        <section className="brand-overview">
          <div className="brand-overview-shell">
            <span className="brand-overview-watermark" aria-hidden="true">
              {brand.mark}
            </span>
            <Reveal className="brand-overview-head">
              <p className="sec-eyebrow-line">{company.name} · Brand</p>
              <h2 className="brand-section-title">About {brand.name}</h2>
              <p className="brand-overview-lead">{brand.description}</p>
            </Reveal>
            {hasOverviewStats ? (
              <ul
                className="sec-stat-grid brand-overview-stats"
                aria-label={`${brand.name} at a glance`}
              >
                {detail!.stats!.map((s, i) => (
                  <li key={s.label} className="sec-stat-card">
                    <span className="sec-stat-card-n" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="sec-stat-v">{s.value}</span>
                    <span className="sec-stat-l">{s.label}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <Reveal className="brand-feature" delay={1}>
            <CardMedia
              image={brand.image ?? fallbackImage}
              mark={brand.mark}
              name={brand.name}
              color={data.color}
              className="brand-feature-media"
            />
            <div className="brand-context">
              <p className="brand-context-label">
                Distributed by {company.name}
              </p>
              <p className="brand-context-text">{company.description}</p>
              {detail?.established || detail?.origin ? (
                <dl className="brand-meta">
                  {detail.established ? (
                    <div className="brand-meta-row">
                      <dt>Milestone</dt>
                      <dd>{detail.established}</dd>
                    </div>
                  ) : null}
                  {detail.origin ? (
                    <div className="brand-meta-row">
                      <dt>Origin</dt>
                      <dd>{detail.origin}</dd>
                    </div>
                  ) : null}
                </dl>
              ) : null}
              <Link href={companyBase} className="sec-cta sec-cta--solid">
                About {company.name} →
              </Link>
            </div>
          </Reveal>
        </section>

        {detail ? (
          <BrandDetailSections detail={detail} skipStats={hasOverviewStats} />
        ) : null}

        {siblings.length > 0 ? (
          <section className="sec-other brand-other">
            <div className="brand-section-head">
              <Reveal as="h2" className="brand-section-title">
                More from {company.name}
              </Reveal>
            </div>
            <div className="sec-other-grid">
              {siblings.map((c, i) => (
                <Reveal
                  key={c.slug}
                  delay={((i % 3) + 1) as 1 | 2 | 3}
                  className="sec-other-reveal"
                >
                  <Link
                    href={`${companyBase}/${c.slug}`}
                    className="sec-other-card"
                  >
                    <CardMedia
                      image={c.image ?? fallbackImage}
                      logo={c.logo}
                      mark={c.mark}
                      name={c.name}
                      color={data.color}
                      className="sec-other-media"
                    />
                    <div className="sec-other-body">
                      <h3>{c.name}</h3>
                      <p>{c.role}</p>
                      <span className="sec-other-arrow" aria-hidden="true">
                        →
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </section>
        ) : null}

        <section className="sec-closing brand-closing">
          <Reveal as="p" className="sec-closing-quote">
            {data.closing}
          </Reveal>
          <div className="sec-closing-actions">
            <Link href={companyBase} className="sec-cta sec-cta--solid">
              ← Back to {company.name}
            </Link>
            <Link href={routes.contact} className="sec-cta">
              Get in touch
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
