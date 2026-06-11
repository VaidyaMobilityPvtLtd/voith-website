import Link from "next/link";
import { routes, sectorPages, type SectorSlug } from "@/data/content";
import BrandDetailSections from "./BrandDetailSections";

type Props = { slug: SectorSlug; companySlug: string };

export default function CompanyPageView({ slug, companySlug }: Props) {
  const data = sectorPages[slug];
  const company = data.brands.find((b) => b.slug === companySlug);
  if (!company) return null;

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
        <div className="brand-hero-bg" aria-hidden="true" />
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
          <span className="brand-hero-mark" aria-hidden="true">
            {company.mark}
          </span>
          <h1 className="pg-title">{company.name}</h1>
          <p className="brand-hero-role">{company.role}</p>
        </div>
      </header>

      <div className="pg-body">
        <section className="brand-overview">
          <div className="brand-overview-grid">
            <div>
              <p className="sec-eyebrow-line">{data.label} · Company</p>
              <h2 className="pg-section-title">About {company.name}</h2>
            </div>
            <p className="brand-overview-body">{company.description}</p>
          </div>
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
                <p className="sec-eyebrow-line">Overview</p>
                <div className="brand-detail-prose">
                  {detail.intro.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>
            ) : null}

            {children.length > 0 ? (
              <section className="brand-children">
                <h2 className="pg-section-title">
                  {children.length === 1
                    ? "Brand under " + company.name
                    : "Brands under " + company.name}
                </h2>
                <div className="brand-children-grid">
                  {children.map((c) => (
                    <Link
                      key={c.slug}
                      href={`${companyBase}/${c.slug}`}
                      className="brand-child-card"
                    >
                      <span
                        className="brand-child-mark"
                        style={{ background: data.color }}
                        aria-hidden="true"
                      >
                        {c.mark}
                      </span>
                      <div className="brand-child-body">
                        <h3>{c.name}</h3>
                        <p className="brand-child-role">{c.role}</p>
                        <p className="brand-child-desc">{c.description}</p>
                        <span className="brand-child-cta">
                          Read more <span aria-hidden="true">→</span>
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}

            {detail ? <BrandDetailSections detail={detail} skipIntro /> : null}
          </>
        )}

        {siblings.length > 0 ? (
          <section className="sec-other">
            <h2 className="pg-section-title">More in {data.label}</h2>
            <div className="sec-other-grid">
              {siblings.map((b) => (
                <Link
                  key={b.slug}
                  href={`${routes.industries}/${slug}/${b.slug}`}
                  className="sec-other-card"
                >
                  <span
                    className="sec-other-mark"
                    style={{ background: data.color }}
                    aria-hidden="true"
                  >
                    {b.mark}
                  </span>
                  <div>
                    <h3>{b.name}</h3>
                    <p>{b.role}</p>
                  </div>
                  <span className="sec-other-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <section className="sec-closing">
          <p className="sec-closing-quote">{data.closing}</p>
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
