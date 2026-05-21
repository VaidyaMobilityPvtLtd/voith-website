import { family, pageMeta } from "@/data/content";
import PageShell from "./PageShell";

const meta = pageMeta.people;
const [founder, ...leaders] = family;

export default function PeoplePageView() {
  return (
    <PageShell
      theme="people"
      eyebrow={meta.eyebrow}
      title={meta.title}
      description={meta.description}
      stat={meta.stat}
      statLabel={meta.statLabel}
    >
      {founder ? (
        <section className="pg-founder">
          <div className="pg-founder-badge">{founder.initials}</div>
          <div className="pg-founder-copy">
            <p className="pg-founder-label">Founder</p>
            <h2>{founder.name}</h2>
            <p className="pg-founder-role">{founder.role}</p>
            <p className="pg-founder-bio">{founder.bio}</p>
          </div>
        </section>
      ) : null}

      <section className="pg-leaders">
        <h2 className="pg-section-title">Leadership today</h2>
        <div className="pg-leader-cards">
          {leaders.map((m) => (
            <article className="pg-leader-card" key={m.name}>
              <div className="pg-leader-av">{m.initials}</div>
              <h3>{m.name}</h3>
              <p className="pg-leader-role">{m.role}</p>
              <p>{m.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
