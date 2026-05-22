import Link from "next/link";
import type { ReactNode } from "react";
import { routes } from "@/data/content";

type PageShellProps = {
  theme: "industries" | "impact" | "people" | "future" | "contact";
  eyebrow: string;
  title: string;
  description: string;
  stat?: string;
  statLabel?: string;
  children: ReactNode;
};

export default function PageShell({
  theme,
  eyebrow,
  title,
  description,
  stat,
  statLabel,
  children,
}: PageShellProps) {
  return (
    <div className={`pg pg-${theme}`}>
      <header className="pg-hero">
        <div className="pg-hero-inner">
          <nav className="pg-crumb" aria-label="Breadcrumb">
            <Link href={routes.home}>Home</Link>
            <span aria-hidden="true">/</span>
            <span>{eyebrow}</span>
          </nav>
          <p className="pg-eyebrow">{eyebrow}</p>
          <h1 className="pg-title">{title}</h1>
          <p className="pg-lead">{description}</p>
        </div>
        {stat && statLabel ? (
          <div className="pg-hero-aside">
            <span className="pg-stat-n">{stat}</span>
            <span className="pg-stat-l">{statLabel}</span>
          </div>
        ) : null}
      </header>
      <div className="pg-body">{children}</div>
    </div>
  );
}
