"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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
  const [openPerson, setOpenPerson] = useState<PersonCard | null>(null);
  const current = tabs.find((t) => t.key === active)!;

  useEffect(() => {
    if (!openPerson) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenPerson(null);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openPerson]);

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

        {active === "exec" && (
          <PeopleGrid people={executiveTeam} onOpen={setOpenPerson} />
        )}
        {active === "board" && (
          <PeopleGrid people={boardOfDirectors} onOpen={setOpenPerson} />
        )}
        {active === "family" && (
          <FamilyView
            teams={voithFamily}
            stats={voithFamilyStats}
            onOpen={setOpenPerson}
          />
        )}
      </section>

      {openPerson ? (
        <PersonModal person={openPerson} onClose={() => setOpenPerson(null)} />
      ) : null}
    </>
  );
}

function PeopleGrid({
  people,
  onOpen,
}: {
  people: PersonCard[];
  onOpen: (p: PersonCard) => void;
}) {
  return (
    <div className="people-grid">
      {people.map((p) => (
        <PersonCardView key={p.name} person={p} onOpen={onOpen} />
      ))}
    </div>
  );
}

function PersonCardView({
  person: p,
  onOpen,
  headingLevel = 3,
}: {
  person: PersonCard;
  onOpen: (p: PersonCard) => void;
  headingLevel?: 3 | 4;
}) {
  const interactive = Boolean(p.bio);
  const Heading = (headingLevel === 4 ? "h4" : "h3") as "h3" | "h4";

  const content = (
    <>
      <div
        className={`people-card-photo${p.image ? " has-img" : ""}`}
        aria-hidden="true"
      >
        {p.image ? (
          <Image
            src={p.image}
            alt=""
            fill
            sizes="(max-width: 800px) 108px, 132px"
            className="people-card-img"
          />
        ) : (
          <span>{p.initials}</span>
        )}
      </div>
      <div className="people-card-body">
        {p.badge ? <span className="people-card-badge">{p.badge}</span> : null}
        <Heading className="people-card-name">{p.name}</Heading>
        <p className="people-card-role">{p.role}</p>
      </div>
    </>
  );

  if (interactive) {
    return (
      <button
        type="button"
        className="people-card people-card--button"
        onClick={() => onOpen(p)}
        aria-label={`View ${p.name} — ${p.role}`}
      >
        {content}
      </button>
    );
  }

  return <article className="people-card">{content}</article>;
}

function PersonModal({
  person,
  onClose,
}: {
  person: PersonCard;
  onClose: () => void;
}) {
  return (
    <div
      className="person-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="person-modal-title"
      onClick={onClose}
    >
      <div
        className="person-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="person-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <div className="person-modal-photo">
          {person.image ? (
            <Image
              src={person.image}
              alt={person.name}
              fill
              sizes="(max-width: 800px) 100vw, 480px"
              className="person-modal-img"
              priority
            />
          ) : (
            <span>{person.initials}</span>
          )}
        </div>
        <div className="person-modal-body">
          {person.badge ? (
            <span className="person-modal-badge">{person.badge}</span>
          ) : null}
          <h2 id="person-modal-title" className="person-modal-name">
            {person.name}
          </h2>
          <p className="person-modal-role">{person.role}</p>
          {person.bio ? <p className="person-modal-bio">{person.bio}</p> : null}
        </div>
      </div>
    </div>
  );
}

function FamilyView({
  teams,
  stats,
  onOpen,
}: {
  teams: FamilyTeam[];
  stats: FamilyStat[];
  onOpen: (p: PersonCard) => void;
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
                <PersonCardView
                  key={`${team.unit}-${m.name}`}
                  person={m}
                  onOpen={onOpen}
                  headingLevel={4}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
