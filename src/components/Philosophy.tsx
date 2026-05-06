import Reveal from "./Reveal";
import { values } from "@/data/content";

export default function Philosophy() {
  return (
    <section id="philosophy">
      <Reveal className="sh">
        <span className="sn">Philosophy</span>
        <h2>What Drives Us</h2>
      </Reveal>
      <Reveal className="phi-grid">
        <div className="phi-c">
          <div className="phi-tag">Mission</div>
          <h3>Built for the long run</h3>
          <p>
            Continuous sustainable growth and improvement by adapting to the environment and the
            needs of the country.
          </p>
        </div>
        <div className="phi-c">
          <div className="phi-tag">Vision</div>
          <h3>Pioneering prosperity</h3>
          <p>
            Pioneering in all industries to flourish and bring prosperity to society — bolstering
            the standard of living, knowledge, and quality of life for people in Nepal.
          </p>
        </div>
        <div className="phi-c full">
          <div className="phi-tag">Values</div>
          <div className="vpills">
            {values.map((v) => (
              <span className="vpill" key={v}>
                {v}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
