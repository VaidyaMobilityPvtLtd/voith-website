import Reveal from "./Reveal";
import { family } from "@/data/content";

export default function Family() {
  return (
    <section id="family">
      <Reveal className="sh">
        <span className="sn">Leadership</span>
        <h2>The VOITH Family</h2>
      </Reveal>
      <Reveal className="fam-grid">
        {family.map((m) => (
          <div className={`fam-c${m.full ? " full" : ""}`} key={m.name}>
            <div className="fam-av">{m.initials}</div>
            <div className="fam-name">{m.name}</div>
            <div className="fam-role">{m.role}</div>
            <p className="fam-bio">{m.bio}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
