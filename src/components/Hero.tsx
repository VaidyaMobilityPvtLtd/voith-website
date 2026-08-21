import Link from "next/link";
import {
  features,
  getYearsSinceFounding,
  heroGroups,
  routes,
  type Feature,
} from "@/data/content";

const stroke = "#6B6968";

function FeatureIcon({ icon }: { icon: Feature["icon"] }) {
  if (icon === "people") {
    return (
      <svg className="feat-icon" viewBox="0 0 36 36" fill="none" stroke={stroke} strokeWidth="1.5">
        <circle cx="18" cy="12" r="6" />
        <circle cx="8" cy="14" r="4.5" />
        <circle cx="28" cy="14" r="4.5" />
        <path d="M2 30c0-5 3-8 6-8M34 30c0-5-3-8-6-8M10 30c0-5.5 3.5-9 8-9s8 3.5 8 9" />
      </svg>
    );
  }
  return (
    <svg className="feat-icon" viewBox="0 0 36 36" fill="none" stroke={stroke} strokeWidth="1.5">
      <rect x="3" y="20" width="10" height="13" rx="1" />
      <rect x="16" y="12" width="4" height="21" rx="1" />
      <rect x="23" y="6" width="10" height="27" rx="1" />
      <path d="M4 14l7-8 9 5 10-11" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-main">
        <div className="hl">
          <div className="hl-eyebrow">Nepal&apos;s Leading Business Group</div>
          <h1>
            <span className="hl-accent">VOITH</span> Builds Nepal&apos;s Industries Across Four
            Sectors
          </h1>
          <div className="hl-badge">★&nbsp;Founded 1964</div>
          <p>
            From Toyota to Ather Energy to cement production, VOITH has been
            pioneering Nepal&apos;s industrial and economic growth for over six decades.
          </p>
          <Link href={routes.industries} className="btn-red">
            Explore Our Group &nbsp;→
          </Link>
        </div>
        <div className="hr-panel">
          <div className="hr-stat">
            <div className="hr-big">
              {getYearsSinceFounding()}
              <span>+</span>
            </div>
            <div className="hr-sub">
              Years pioneering Nepal&apos;s economy
              <br />
              across four industries
            </div>
          </div>
          <div className="hr-scroll">
            <div className="hr-items">
              <div className="hr-items-head">Our Companies</div>
              {heroGroups.map((group) => (
                <div className="hr-group" key={group.slug}>
                  <div className="hr-group-head">
                    <span>{group.label}</span>
                    <span className="hr-group-count">{group.items.length}</span>
                  </div>
                  {group.items.map((item) => (
                    <Link key={item.href} href={item.href} className="hr-item">
                      <div className="hr-item-copy">
                        <div className="hr-item-title">{item.title}</div>
                        <div className="hr-item-sub">{item.sub}</div>
                        {item.status ? (
                          <span className="hr-item-badge">{item.status}</span>
                        ) : null}
                      </div>
                      <div className="hr-arrow">→</div>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="hr-contact">
            <div className="hr-contact-icon">✉</div>
            <div className="hr-contact-text">
              <strong>Contact VOITH</strong>
              <span>Explore partnership &amp; investment</span>
            </div>
          </div>
        </div>
      </div>
      <div className="features-stats">
        {features.map((f) => (
          <div className="feat" key={f.label}>
            <FeatureIcon icon={f.icon} />
            <div>
              <div className="feat-n">{f.label}</div>
              <div className="feat-v">{f.value}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
