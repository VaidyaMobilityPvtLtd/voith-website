import Link from "next/link";
import Reveal from "./Reveal";
import { family, routes } from "@/data/content";

export default function Family() {
  const featured = family.find((m) => m.full);
  const leaders = family.filter((m) => !m.full);

  return (
    <section id="people">
      <div className="lead-wrap">
        <div className="lead-head-block">
          <Reveal className="sh">
            <span className="sn">Leadership</span>
            <h2>The VOITH Family</h2>
          </Reveal>
          <Reveal className="lead-lead-wrap" delay={1}>
            <p className="lead-lead">
              Four generations of Vaidya leadership guiding VOITH across mobility, construction,
              hospitality, and industry in Nepal.
            </p>
          </Reveal>
        </div>

        {featured && (
          <Reveal className="lead-feature" delay={2}>
            <div className="lead-feature-photo" aria-hidden="true">
              <span>{featured.initials}</span>
            </div>
            <div className="lead-feature-body">
              <span className="lead-feature-tag">Founder</span>
              <h3 className="lead-feature-name">{featured.name}</h3>
              <p className="lead-feature-role">{featured.role}</p>
              <p className="lead-feature-bio">{featured.bio}</p>
            </div>
          </Reveal>
        )}

        <div className="lead-team">
          {leaders.map((m, i) => (
            <Reveal key={m.name} className="lead-card" delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="lead-card-photo" aria-hidden="true">
                <span>{m.initials}</span>
              </div>
              <div className="lead-card-body">
                <h3 className="lead-card-name">{m.name}</h3>
                <p className="lead-card-role">{m.role}</p>
                <p className="lead-card-bio">{m.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="lead-cta-wrap" delay={3}>
          <Link href={routes.people} className="lead-cta">
            Meet the full leadership team &nbsp;→
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
