import Link from "next/link";
import type { SectorMarqueeItem } from "@/data/content";

type Props = {
  /** Sector label, used in the band's eyebrow, e.g. "Mobility". */
  label: string;
  items: SectorMarqueeItem[];
};

/**
 * Static band of a sector's brand logos, each linking to that brand's own
 * website (or its page here when it has no external site). Nothing is drawn
 * but the artwork — the logos already carry their names, which reach assistive
 * tech and hover tooltips through the link instead.
 *
 * The row runs from the left gutter, under the eyebrow, however many brands a
 * sector carries.
 */
export default function SectorMarquee({ label, items }: Props) {
  if (items.length === 0) return null;

  return (
    <section className="sec-marquee" aria-label={`${label} brands`}>
      <div className="sec-marquee-head">
        <span className="sec-marquee-eyebrow">{label} · Brands we carry</span>
        <p className="sec-marquee-note">
          Tap a brand to visit its own site <span aria-hidden="true">↗</span>
        </p>
      </div>
      <div className="sec-marquee-viewport">
        <div className="sec-marquee-track">
          {items.map((item) => {
            const cls = "sec-marquee-chip";
            const body = (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={item.logo} alt="" loading="lazy" />
            );
            return item.external ? (
              <a
                key={item.key}
                href={item.href}
                className={cls}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                title={item.name}
              >
                {body}
              </a>
            ) : (
              <Link
                key={item.key}
                href={item.href}
                className={cls}
                aria-label={item.name}
                title={item.name}
              >
                {body}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
