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
      <Reveal className="sec-h">
        <h2>Our Businesses</h2>
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
              <div className="biz-mark" style={{ background: b.color }}>
                {b.letter}
              </div>
              <div className="biz-cat">{b.category}</div>
              <div className="biz-sub">{b.sub}</div>
              <p className="biz-desc">{b.description}</p>
              <Link href={href} className="biz-btn">
                Learn More →
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
