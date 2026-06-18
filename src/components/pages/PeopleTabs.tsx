"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { FamilyStat, FamilyTeam, PersonCard } from "@/data/content";
import type { Employee } from "@/lib/employee-shared";
import { employeeCompanyOrder } from "@/lib/employee-shared";

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
        {!(active === "family" && employees.length > 0) ? (
          <h2 className="people-section-title">{current.label}</h2>
        ) : null}

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

/** Live employee directory — filter by company, then departments (Toyota style). */
function FamilyDirectory({ employees }: { employees: Employee[] }) {
  const [company, setCompany] = useState<string>("all");
  const [openDepts, setOpenDepts] = useState<Set<string>>(new Set());

  const companies = useMemo(() => {
    const counts = new Map<string, number>();
    for (const e of employees) {
      counts.set(e.company, (counts.get(e.company) ?? 0) + 1);
    }
    return employeeCompanyOrder.filter((c) => counts.has(c));
  }, [employees]);

  const scoped = useMemo(
    () =>
      company === "all"
        ? employees
        : employees.filter((e) => e.company === company),
    [employees, company],
  );

  const departments = useMemo(() => {
    const map = new Map<string, Employee[]>();
    for (const e of scoped) {
      const key = e.department || "Other";
      const list = map.get(key);
      if (list) list.push(e);
      else map.set(key, [e]);
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [scoped]);

  const sectionTitle =
    company === "all"
      ? "Departments of VOITH"
      : `Departments of ${company}`;

  const onCompanyChange = (next: string) => {
    setCompany(next);
    setOpenDepts(new Set());
  };

  const toggleDept = (dept: string) => {
    setOpenDepts((prev) => {
      const next = new Set(prev);
      if (next.has(dept)) next.delete(dept);
      else next.add(dept);
      return next;
    });
  };

  return (
    <div className="family-view">
      <h2 className="people-section-title">{sectionTitle}</h2>

      <div
        className="emp-company-filter"
        role="tablist"
        aria-label="Filter by company"
      >
        <button
          type="button"
          role="tab"
          aria-selected={company === "all"}
          className={`emp-company-pill${company === "all" ? " is-active" : ""}`}
          onClick={() => onCompanyChange("all")}
        >
          All companies
          <span className="emp-company-count">{employees.length}</span>
        </button>
        {companies.map((c) => {
          const count = employees.filter((e) => e.company === c).length;
          return (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={company === c}
              className={`emp-company-pill${company === c ? " is-active" : ""}`}
              onClick={() => onCompanyChange(c)}
            >
              {c}
              <span className="emp-company-count">{count}</span>
            </button>
          );
        })}
      </div>

      {departments.length === 0 ? (
        <p className="emp-empty">No team members in this company.</p>
      ) : (
        <div className="dept-accordion">
          {departments.map(([dept, members]) => {
            const open = openDepts.has(dept);
            const panelId = `dept-panel-${dept.replace(/\s+/g, "-").toLowerCase()}`;
            return (
              <div
                key={dept}
                className={`dept-item${open ? " is-open" : ""}`}
              >
                <button
                  type="button"
                  className="dept-trigger"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => toggleDept(dept)}
                >
                  <span className="dept-trigger-label">{dept}</span>
                  <span className="dept-chevron" aria-hidden="true">
                    <svg
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.5L6 6.5L11 1.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                {open ? (
                  <div id={panelId} className="dept-panel" role="region">
                    <p className="dept-panel-count">
                      {members.length} team member
                      {members.length === 1 ? "" : "s"}
                    </p>
                    <div className="emp-grid">
                      {members.map((e) => (
                        <article className="emp-card" key={e.id}>
                          <div className="emp-photo">
                            <EmpPhoto src={e.photo} name={e.name} />
                          </div>
                          <div className="emp-body">
                            <h4 className="emp-name">{e.name}</h4>
                            {e.designation ? (
                              <p className="emp-role">{e.designation}</p>
                            ) : null}
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
