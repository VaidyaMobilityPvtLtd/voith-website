import Reveal from "./Reveal";
import { values } from "@/data/content";

const blocks = [
  {
    label: "Vision",
    body:
      "Pioneering in all industries to flourish and bring prosperity to society, bolstering the standard of living, knowledge, and quality of life for people in Nepal.",
  },
  {
    label: "Mission",
    body:
      "Continuous sustainable growth and improvement by adapting to the environment and the needs of the country.",
  },
] as const;

export default function Philosophy() {
  return (
    <section id="philosophy">
      <div className="phi-wrap">
        <div className="phi-grid">
          <Reveal className="phi-side">
            <span className="phi-eyebrow">
              <span className="phi-eyebrow-dot" aria-hidden="true" />
              Philosophy
            </span>
            <h2 className="phi-side-title">Our Values</h2>
            <p className="phi-side-lead">
              The principles that guide every decision across our four core sectors.
            </p>
          </Reveal>

          <div className="phi-rail">
            {blocks.map((b, i) => (
              <Reveal
                key={b.label}
                as="article"
                className="phi-block"
                delay={(i + 1) as 1 | 2}
              >
                <span className="phi-block-marker" aria-hidden="true" />
                <h3 className="phi-block-title">{b.label}</h3>
                <p className="phi-block-body">{b.body}</p>
              </Reveal>
            ))}

            <Reveal as="article" className="phi-block phi-block--values" delay={3}>
              <span className="phi-block-marker" aria-hidden="true" />
              <h3 className="phi-block-title">Values</h3>
              <ul className="phi-values-list">
                {values.map((v, i) => (
                  <li className="phi-value" key={v}>
                    <span className="phi-value-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="phi-value-name">{v}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
