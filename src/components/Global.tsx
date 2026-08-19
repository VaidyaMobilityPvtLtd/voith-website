import Reveal from "./Reveal";
import NepalFootprintMap from "./NepalFootprintMap";
import { globalFeatures } from "@/data/content";

export default function Global() {
  return (
    <section id="global">
      <Reveal className="gl-top">
        <div>
          <div className="gl-eyebrow">Nationwide Presence</div>
          <h2 className="gl-h2">
            High-Quality Products,
            <br />
            Trusted Across
            <br />
            <span>All of Nepal.</span>
          </h2>
        </div>
        <p className="gl-desc">
          From Toyota and Ather to XCMG and Huaxin Cement, VOITH brings world-class,
          high-quality products to customers in every corner of Nepal, backed by sales,
          service, and spare-parts networks spanning all seven provinces.
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
      <NepalFootprintMap />
    </section>
  );
}
