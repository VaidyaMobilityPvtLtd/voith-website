import Link from "next/link";
import {
  routes,
  sectorPages,
  sectorPlaceholderImages,
  type SectorSlug,
} from "@/data/content";
import BrandDetailSections from "./BrandDetailSections";
import BrandChildrenCarousel from "../BrandChildrenCarousel";
import CardMedia from "../CardMedia";
import Reveal from "../Reveal";

type Props = { slug: SectorSlug; companySlug: string };

export default function CompanyPageView({ slug, companySlug }: Props) {
  const data = sectorPages[slug];
  const company = data.brands.find((b) => b.slug === companySlug);
  if (!company) return null;

  const fallbackImage = sectorPlaceholderImages[slug];

  const siblings = data.brands.filter((b) => b.slug !== companySlug);
  const children = company.children ?? [];
  const detail = company.detail;
  const companyBase = `${routes.industries}/${slug}/${company.slug}`;

  return (
    <div
      className="pg pg-brand"
      style={{ "--sector-color": data.color } as React.CSSProperties}
    >
      <header className="pg-hero brand-hero">
        <div
          className="brand-hero-bg"
          aria-hidden="true"
          style={{
            backgroundImage: `url(${company.image ?? fallbackImage})`,
            ...(company.slug === "philippines-consulate"
              ? { backgroundPosition: "center 58%" }
              : {}),
          }}
        />
        <div className="pg-hero-content">
          <nav className="pg-crumb" aria-label="Breadcrumb">
            <Link href={routes.home}>Home</Link>
            <span aria-hidden="true">/</span>
            <Link href={routes.industries}>Industries</Link>
            <span aria-hidden="true">/</span>
            <Link href={`${routes.industries}/${slug}`}>{data.label}</Link>
            <span aria-hidden="true">/</span>
            <span>{company.name}</span>
          </nav>
          <Reveal
            className={`brand-hero-mark${company.mark.length > 3 ? " brand-hero-mark--wide" : ""}`}
            aria-hidden="true"
          >
            {company.mark}
          </Reveal>
          <Reveal as="h1" className="pg-title" delay={1}>
            {company.name}
          </Reveal>
          <Reveal as="p" className="brand-hero-role" delay={2}>
            {company.role}
          </Reveal>
          {company.status ? (
            <Reveal delay={3}>
              <span className="brand-hero-status">{company.status}</span>
            </Reveal>
          ) : null}
        </div>
      </header>

      <div className="pg-body">
        <section className="brand-overview">
          <Reveal className="brand-overview-grid">
            <div>
              <p className="sec-eyebrow-line">{data.label} · Company</p>
              <h2 className="pg-section-title">About {company.name}</h2>
            </div>
            <p className="brand-overview-body">{company.description}</p>
          </Reveal>
          <Reveal className="brand-feature" delay={1}>
            <CardMedia
              image={company.image ?? fallbackImage}
              mark={company.mark}
              name={company.name}
              color={data.color}
              className="brand-feature-media"
            />
          <div className="brand-context">
            <p className="brand-context-label">Part of VOITH {data.label}</p>
            <p className="brand-context-text">{data.description}</p>
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
                    <dt>Distribution</dt>
                    <dd>{detail.origin}</dd>
                  </div>
                ) : null}
              </dl>
            ) : null}
            <Link
              href={`${routes.industries}/${slug}`}
              className="sec-cta sec-cta--solid"
            >
              Explore the {data.label} sector →
            </Link>
          </div>
          </Reveal>
        </section>

        {company.comingSoon ? (
          <section className="brand-soon">
            <div className="brand-soon-card">
              <span className="brand-soon-badge">Coming soon</span>
              <h2 className="brand-soon-title">
                {company.name} is joining the VOITH portfolio
              </h2>
              <p className="brand-soon-text">
                We&apos;re putting the finishing touches on this chapter. Details
                about {company.name} will be announced here soon.
              </p>
              <Link href={routes.contact} className="sec-cta sec-cta--solid">
                Get in touch →
              </Link>
            </div>
          </section>
        ) : (
          <>
            {detail?.intro && detail.intro.length > 0 ? (
              <section className="brand-detail">
                <Reveal as="p" className="sec-eyebrow-line">
                  Overview
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

            {children.length > 0 ? (
              <BrandChildrenCarousel
                title={
                  children.length === 1
                    ? "Brand under " + company.name
                    : "Brands under " + company.name
                }
                children={children}
                companyBase={companyBase}
                color={data.color}
                fallbackImage={fallbackImage}
              />
            ) : null}

            {detail ? <BrandDetailSections detail={detail} skipIntro /> : null}
          </>
        )}

        {siblings.length > 0 ? (
          <section className="sec-other">
            <Reveal as="h2" className="pg-section-title">
              More in {data.label}
            </Reveal>
            <div className="sec-other-grid">
              {siblings.map((b, i) => (
                <Reveal
                  key={b.slug}
                  delay={((i % 3) + 1) as 1 | 2 | 3}
                  className="sec-other-reveal"
                >
                  <Link
                    href={`${routes.industries}/${slug}/${b.slug}`}
                    className="sec-other-card"
                  >
                    <CardMedia
                      image={b.image ?? fallbackImage}
                      mark={b.mark}
                      name={b.name}
                      color={data.color}
                      className="sec-other-media"
                    />
                    <div className="sec-other-body">
                      <h3>{b.name}</h3>
                      <p>{b.role}</p>
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
            <Link
              href={`${routes.industries}/${slug}`}
              className="sec-cta sec-cta--solid"
            >
              ← Back to {data.label}
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
