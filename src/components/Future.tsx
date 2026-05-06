import Reveal from "./Reveal";
import { futureItems } from "@/data/content";

export default function Future() {
  return (
    <section id="future">
      <Reveal className="sh inv">
        <span className="sn">Future</span>
        <h2>Future Endeavours</h2>
      </Reveal>
      <Reveal className="fut-grid">
        {futureItems.map((f) => (
          <div className="fut-c" key={f.title}>
            <div className="fut-pill">{f.pill}</div>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
