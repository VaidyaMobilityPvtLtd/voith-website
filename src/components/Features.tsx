import { features, type Feature } from "@/data/content";

const stroke = "#6B6968";

function FeatureIcon({ icon }: { icon: Feature["icon"] }) {
  if (icon === "bars") {
    return (
      <svg className="feat-icon" viewBox="0 0 36 36" fill="none" stroke={stroke} strokeWidth="1.5">
        <rect x="4" y="18" width="6" height="14" rx="1" />
        <rect x="15" y="10" width="6" height="22" rx="1" />
        <rect x="26" y="4" width="6" height="28" rx="1" />
      </svg>
    );
  }
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
    <div id="features">
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
  );
}
