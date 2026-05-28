import Link from "next/link";
import Reveal from "./Reveal";
import { businesses, industryDropdown, routes } from "@/data/content";

const slugByCategory = industryDropdown.reduce<Record<string, string>>(
  (acc, item) => {
    acc[item.label] = item.slug;
    return acc;
  },
  {},
);

export default function Businesses() {
  return (
    <section id="businesses">
      <div className="biz-wrap">
        <Reveal className="biz-head">
          <span className="biz-eyebrow">
            <span className="biz-eyebrow-dot" aria-hidden="true" />
            Sectors
          </span>
          <h2 className="biz-title">Our Businesses</h2>
          <p className="biz-lead">
            Four pillars driving Nepal&apos;s growth — mobility, construction, hospitality,
            and diversified industry.
          </p>
        </Reveal>

        <div className="biz-grid">
          {businesses.map((b, i) => {
            const slug = slugByCategory[b.category];
            const href = slug ? `${routes.industries}/${slug}` : routes.industries;
            return (
              <Reveal
                key={b.category}
                className="biz-card"
                delay={(i + 1) as 1 | 2 | 3 | 4}
              >
                <div
                  className="biz-card-media"
                  style={{ backgroundImage: `url(${b.image})` }}
                  aria-hidden="true"
                />
                <div className="biz-card-body">
                  <h3 className="biz-card-title">{b.category}</h3>
                  <p className="biz-card-sub">{b.sub}</p>
                  <Link href={href} className="biz-card-link">
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
