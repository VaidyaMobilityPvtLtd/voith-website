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
  heroImage: string;
  children: ReactNode;
};

export default function PageShell({
  theme,
  eyebrow,
  title,
  description,
  stat,
  statLabel,
  heroImage,
  children,
}: PageShellProps) {
  return (
    <div className={`pg pg-${theme}`}>
      <header className="pg-hero">
        <div
          className="pg-hero-bg"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-hidden="true"
        />
        <div className="pg-hero-shade" aria-hidden="true" />
        <div className="pg-hero-content">
          <nav className="pg-crumb" aria-label="Breadcrumb">
            <Link href={routes.home}>Home</Link>
            <span aria-hidden="true">/</span>
            <span>{eyebrow}</span>
          </nav>
          <p className="pg-eyebrow">{eyebrow}</p>
          <h1 className="pg-title">{title}</h1>
          <p className="pg-lead">{description}</p>
          {stat && statLabel ? (
            <div className="pg-hero-badge">
              <span className="pg-hero-badge-rule" aria-hidden="true" />
              <span className="pg-hero-badge-n">{stat}</span>
              <span className="pg-hero-badge-l">{statLabel}</span>
              <span className="pg-hero-badge-rule" aria-hidden="true" />
            </div>
          ) : null}
        </div>
      </header>
      <div className="pg-body">{children}</div>
    </div>
  );
}
