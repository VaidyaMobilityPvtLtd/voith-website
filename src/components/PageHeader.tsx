import Link from "next/link";
import { routes } from "@/data/content";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  stat?: string;
  statLabel?: string;
};

export default function PageHeader({
  eyebrow,
  title,
  description,
  stat,
  statLabel,
}: PageHeaderProps) {
  return (
    <header className="page-hero">
      <div className="page-hero-grid">
        <div className="page-hero-main">
          <nav className="page-breadcrumb" aria-label="Breadcrumb">
            <Link href={routes.home}>Home</Link>
            <span aria-hidden="true">/</span>
            <span>{eyebrow}</span>
          </nav>
          <p className="page-eyebrow">{eyebrow}</p>
          <h1 className="page-title">{title}</h1>
          <p className="page-desc">{description}</p>
        </div>
        {stat && statLabel ? (
          <div className="page-hero-panel" aria-hidden="true">
            <div className="page-hero-stat">
              <span className="page-hero-stat-n">{stat}</span>
              <span className="page-hero-stat-l">{statLabel}</span>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
