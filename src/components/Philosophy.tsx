import Reveal from "./Reveal";
import { values } from "@/data/content";

const pillars = [
  {
    tag: "Mission",
    index: "01",
    title: "Built for the long run",
    body:
      "Continuous sustainable growth and improvement by adapting to the environment and the needs of the country.",
  },
  {
    tag: "Vision",
    index: "02",
    title: "Pioneering prosperity",
    body:
      "Pioneering in all industries to flourish and bring prosperity to society — bolstering the standard of living, knowledge, and quality of life for people in Nepal.",
  },
] as const;

export default function Philosophy() {
  return (
    <section id="philosophy">
      <div className="phi-wrap">
        <div className="phi-head-block">
          <Reveal className="sh">
            <span className="sn">Philosophy</span>
            <h2>What Drives Us</h2>
          </Reveal>
          <Reveal className="phi-lead-wrap" delay={1}>
            <p className="phi-lead">
              The principles that guide every decision across VOITH&apos;s four core sectors.
            </p>
          </Reveal>
        </div>

        <div className="phi-mvv">
          {pillars.map((item, i) => (
            <Reveal
              key={item.tag}
              className="phi-c"
              delay={(i + 1) as 1 | 2}
              data-index={item.index}
            >
              <span className="phi-tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="phi-values-panel" delay={3}>
          <div className="phi-values-head">
            <span className="phi-tag phi-tag--light">Values</span>
            <p className="phi-values-desc">
              Nine principles that shape how we lead, partner, and build for Nepal.
            </p>
          </div>
          <ul className="vpills vpills--dark">
            {values.map((v) => (
              <li className="vpill" key={v}>
                {v}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
