"use client";

import { useState } from "react";
import type { FamilyStat, FamilyTeam, PersonCard } from "@/data/content";

type TabKey = "exec" | "board" | "family";

type Tab = { key: TabKey; label: string };

const tabs: Tab[] = [
  { key: "exec", label: "Executive Management Team" },
  { key: "board", label: "Board of Directors" },
  { key: "family", label: "VOITH Family" },
];

type Props = {
  executiveTeam: PersonCard[];
  boardOfDirectors: PersonCard[];
  voithFamily: FamilyTeam[];
  voithFamilyStats: FamilyStat[];
};

export default function PeopleTabs({
  executiveTeam,
  boardOfDirectors,
  voithFamily,
  voithFamilyStats,
}: Props) {
  const [active, setActive] = useState<TabKey>("exec");
  const current = tabs.find((t) => t.key === active)!;

  return (
    <>
      <div className="people-tabs" role="tablist" aria-label="Leadership sections">
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            aria-selected={active === t.key}
            className={`people-tab${active === t.key ? " is-active" : ""}`}
            onClick={() => setActive(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <section className="people-section">
        <h2 className="people-section-title">{current.label}</h2>

        {active === "exec" && <PeopleGrid people={executiveTeam} />}
        {active === "board" && <PeopleGrid people={boardOfDirectors} />}
        {active === "family" && (
          <FamilyView teams={voithFamily} stats={voithFamilyStats} />
        )}
      </section>
    </>
  );
}

function PeopleGrid({ people }: { people: PersonCard[] }) {
  return (
    <div className="people-grid">
      {people.map((p) => (
        <article className="people-card" key={p.name}>
          <div className="people-card-photo" aria-hidden="true">
            <span>{p.initials}</span>
          </div>
          <div className="people-card-body">
            {p.badge ? <span className="people-card-badge">{p.badge}</span> : null}
            <h3 className="people-card-name">{p.name}</h3>
            <p className="people-card-role">{p.role}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function FamilyView({
  teams,
  stats,
}: {
  teams: FamilyTeam[];
  stats: FamilyStat[];
}) {
  return (
    <div className="family-view">
      <p className="family-lead">
        From the showroom floor to the cement plant, from the Ather Grid to the
        wellness deck — the people who carry the VOITH name across Nepal.
      </p>

      <div className="family-stats">
        {stats.map((s) => (
          <div className="family-stat" key={s.label}>
            <span className="family-stat-v">{s.value}</span>
            <span className="family-stat-l">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="family-blocks">
        {teams.map((team) => (
          <section className="family-block" key={team.unit}>
            <header className="family-block-header">
              <span className="family-block-tag">{team.business}</span>
              <h3>{team.unit}</h3>
              <p>{team.description}</p>
            </header>
            <div className="people-grid">
              {team.members.map((m) => (
                <article className="people-card" key={`${team.unit}-${m.name}`}>
                  <div className="people-card-photo" aria-hidden="true">
                    <span>{m.initials}</span>
                  </div>
                  <div className="people-card-body">
                    <h4 className="people-card-name">{m.name}</h4>
                    <p className="people-card-role">{m.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
