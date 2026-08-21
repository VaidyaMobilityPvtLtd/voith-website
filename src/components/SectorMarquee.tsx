import Link from "next/link";
import type { SectorMarqueeItem } from "@/data/content";

type Props = {
  /** Sector label, used in the band's eyebrow, e.g. "Mobility". */
  label: string;
  items: SectorMarqueeItem[];
};

function ChipBody({ item }: { item: SectorMarqueeItem }) {
  return (
    <>
      <span className="sec-marquee-logo">
        {item.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.image}
            alt=""
            loading="lazy"
            className={item.isLogo ? "is-logo" : "is-photo"}
          />
        ) : (
          <span className="sec-marquee-mark">{item.mark}</span>
        )}
      </span>
      <span className="sec-marquee-name">{item.name}</span>
      <span className="sec-marquee-arrow" aria-hidden="true">
        {item.external ? "↗" : "→"}
      </span>
    </>
  );
}

/**
 * Continuously scrolling band of a sector's brands, each linking to that
 * brand's own website (or its page here when it has no external site).
 * The lane is rendered twice so the CSS translate loops seamlessly; the
 * second pass is decorative and hidden from assistive tech.
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
        <div
          className="sec-marquee-track"
          style={{ "--lane-count": items.length } as React.CSSProperties}
        >
          {[0, 1].map((pass) =>
            items.map((item) => {
              const dup = pass === 1;
              const key = `${pass}-${item.key}`;
              const cls = "sec-marquee-chip";
              return item.external ? (
                <a
                  key={key}
                  href={item.href}
                  className={cls}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-hidden={dup || undefined}
                  tabIndex={dup ? -1 : undefined}
                >
                  <ChipBody item={item} />
                </a>
              ) : (
                <Link
                  key={key}
                  href={item.href}
                  className={cls}
                  aria-hidden={dup || undefined}
                  tabIndex={dup ? -1 : undefined}
                >
                  <ChipBody item={item} />
                </Link>
              );
            }),
          )}
        </div>
      </div>
    </section>
  );
}
