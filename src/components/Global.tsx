import Reveal from "./Reveal";
import WorldMap from "./WorldMap";
import { globalFeatures } from "@/data/content";

export default function Global() {
  return (
    <section id="global">
      <Reveal className="gl-top">
        <div>
          <div className="gl-eyebrow">Global Partnerships</div>
          <h2 className="gl-h2">
            Built on International
            <br />
            Partnerships.
            <br />
            <span>4 Continents.</span>
          </h2>
        </div>
        <p className="gl-desc">
          VOITH&apos;s supply chain, technology, and brand agreements span Japan, China, India,
          Italy, Germany, South Korea, and beyond — bringing world-class products and expertise
          directly to Nepal.
        </p>
      </Reveal>
      <hr className="gl-rule" />
      <Reveal className="gl-feats">
        {globalFeatures.map((f) => (
          <div className="gl-feat" key={f.title}>
            <div className="gl-feat-ic">{f.icon}</div>
            <strong>{f.title}</strong>
            <p>{f.description}</p>
          </div>
        ))}
      </Reveal>
      <WorldMap />
      <div className="gl-legend">
        <div className="gl-legend-item">
          <span className="gl-dot" style={{ background: "var(--red)" }} />
          Partner Countries
        </div>
        <div className="gl-legend-item">
          <span className="gl-dot" style={{ background: "rgba(255,255,255,.25)" }} />
          Rest of World
        </div>
      </div>
    </section>
  );
}
