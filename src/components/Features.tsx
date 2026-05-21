import Image from "next/image";
import { features, founderSpotlight, type Feature } from "@/data/content";
import founderPhoto from "@/public/dr-vaidya.png";

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

export default function Features() {
  return (
    <section id="features">
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

      <div className="features-founder">
        <div className="founder-copy">
          <h2 className="founder-name">{founderSpotlight.name}</h2>
          <div className="founder-rule" aria-hidden="true" />
          {founderSpotlight.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
        <div className="founder-photo">
          <Image
            src={founderPhoto}
            alt={founderSpotlight.name}
            fill
            sizes="(max-width: 800px) 100vw, 42vw"
            className="founder-photo-img"
            priority
          />
        </div>
      </div>
    </section>
  );
}
