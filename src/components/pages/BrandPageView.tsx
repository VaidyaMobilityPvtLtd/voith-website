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
          <Reveal className="brand-hero-mark" aria-hidden="true">
            {brand.mark}
          </Reveal>
          <Reveal as="h1" className="pg-title" delay={1}>
            {brand.name}
          </Reveal>
          <Reveal as="p" className="brand-hero-role" delay={2}>
            {brand.role}
          </Reveal>
        </div>
      </header>

      <div className="pg-body">
        <section className="brand-overview">
          <Reveal className="brand-overview-grid">
            <div>
              <p className="sec-eyebrow-line">{company.name} · Brand</p>
              <h2 className="pg-section-title">About {brand.name}</h2>
            </div>
            <p className="brand-overview-body">{brand.description}</p>
          </Reveal>
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

        {detail ? <BrandDetailSections detail={detail} /> : null}

        {siblings.length > 0 ? (
          <section className="sec-other">
            <Reveal as="h2" className="pg-section-title">
              More from {company.name}
            </Reveal>
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

        <section className="sec-closing">
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
