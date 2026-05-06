import { topbarSectors } from "@/data/content";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="tb-links">
        {topbarSectors.map((s, i) => (
          <span key={s} className={`tb-link${i === 0 ? " on" : ""}`}>
            {s}
          </span>
        ))}
      </div>
      <div className="tb-right">
        <div className="tb-dot" />
        Kathmandu, Nepal
      </div>
    </div>
  );
}
