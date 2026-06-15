"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { FamilyStat, FamilyTeam, PersonCard } from "@/data/content";
import type { Employee } from "@/lib/employees";

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
  employees: Employee[];
};

export default function PeopleTabs({
  executiveTeam,
  boardOfDirectors,
  voithFamily,
  voithFamilyStats,
  employees,
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
        {active === "family" &&
          (employees.length > 0 ? (
            <FamilyDirectory employees={employees} />
          ) : (
            <FamilyView
              teams={voithFamily}
              stats={voithFamilyStats}
              onOpen={setOpenPerson}
            />
          ))}
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

function initials(name: string): string {
  const cleaned = name.replace(/^(mr|mrs|ms|miss|dr|er|prof)\.?\s+/i, "");
  const parts = cleaned.split(/\s+/).filter(Boolean);
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase() || "?";
}

function EmpPhoto({ src, name }: { src: string; name: string }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return <span className="emp-photo-initials">{initials(name)}</span>;
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      loading="lazy"
      decoding="async"
      draggable={false}
      onError={() => setFailed(true)}
    />
  );
}


/** Live, searchable directory of the full VOITH workforce. */
function FamilyDirectory({ employees }: { employees: Employee[] }) {
  const [q, setQ] = useState("");
  const [dept, setDept] = useState("");

  const departments = useMemo(
    () =>
      Array.from(
        new Set(employees.map((e) => e.department).filter(Boolean)),
      ).sort((a, b) => a.localeCompare(b)),
    [employees],
  );

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return employees.filter((e) => {
      if (dept && e.department !== dept) return false;
      if (!needle) return true;
      return (
        e.name.toLowerCase().includes(needle) ||
        e.designation.toLowerCase().includes(needle) ||
        e.department.toLowerCase().includes(needle)
      );
    });
  }, [employees, q, dept]);

  return (
    <div className="family-view">
      <p className="family-lead">
        From the showroom floor to the cement plant, from the Ather Grid to the
        wellness deck — the {employees.length} people who carry the VOITH name
        across Nepal.
      </p>

      <div className="emp-toolbar">
        <input
          type="search"
          className="emp-search"
          placeholder="Search by name or role…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          aria-label="Search the VOITH family"
        />
        <select
          className="emp-filter"
          value={dept}
          onChange={(e) => setDept(e.target.value)}
          aria-label="Filter by department"
        >
          <option value="">All departments</option>
          {departments.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>

      <p className="emp-count">
        Showing {filtered.length} of {employees.length}
      </p>

      {filtered.length === 0 ? (
        <p className="emp-empty">No team members match your search.</p>
      ) : (
        <div className="emp-grid">
          {filtered.map((e) => (
            <article className="emp-card" key={e.id}>
              <div className="emp-photo">
                <EmpPhoto src={e.photo} name={e.name} />
              </div>
              <div className="emp-body">
                <h4 className="emp-name">{e.name}</h4>
                {e.designation ? (
                  <p className="emp-role">{e.designation}</p>
                ) : null}
                {e.department ? (
                  <span className="emp-dept">{e.department}</span>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
