import Reveal from "./Reveal";
import { eras } from "@/data/content";

export default function History() {
  return (
    <section id="history">
      <Reveal className="sh">
        <span className="sn">History</span>
        <h2>Our Journey Since 1962</h2>
      </Reveal>
      <Reveal className="eras">
        {eras.map((era) => (
          <div className="era-wrap" key={era.title}>
            <div className="era-title">
              {era.title.split("\n").map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </div>
            <div className="tl-row">
              {era.entries.map((entry) => (
                <div className="tl-c" key={entry.year}>
                  <div className="tl-y">{entry.year}</div>
                  <div className="tl-e">{entry.description}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
