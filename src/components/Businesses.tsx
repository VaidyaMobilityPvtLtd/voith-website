import Link from "next/link";
import Reveal from "./Reveal";
import { businesses, routes } from "@/data/content";

export default function Businesses() {
  return (
    <section id="businesses">
      <Reveal className="sec-h">
        <h2>Our Businesses</h2>
      </Reveal>
      <div className="biz-grid">
        {businesses.map((b, i) => (
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
            <Link href={routes.industries} className="biz-btn">
              Learn More →
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
