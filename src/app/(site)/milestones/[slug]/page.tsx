import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { ComponentType } from "react";
import { getMilestone, milestones, routes } from "@/data/content";

type Params = { slug: string };

export function generateStaticParams(): Array<{ slug: string }> {
  return milestones.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const m = getMilestone(slug);
  if (!m) return { title: "Milestones — VOITH" };
  return {
    title: `${m.title} — VOITH`,
    description: m.description,
  };
}

export default async function MilestonePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const m = getMilestone(slug);
  if (!m) notFound();

  let MDXContent: ComponentType;
  try {
    const mod = (await import(
      `../../../../content/milestones/${slug}.mdx`
    )) as { default: ComponentType };
    MDXContent = mod.default;
  } catch {
    notFound();
  }

  return (
    <div className="pg ms-article">
      <header className="pg-hero ms-article-hero">
        <div
          className="pg-hero-bg"
          style={{ backgroundImage: `url(${m.heroImage})` }}
          aria-hidden="true"
        />
        <div className="pg-hero-shade" aria-hidden="true" />
        <div className="pg-hero-content">
          <nav className="pg-crumb" aria-label="Breadcrumb">
            <Link href={routes.home}>Home</Link>
            <span aria-hidden="true">/</span>
            <Link href={`${routes.home}#milestones`}>Milestones</Link>
            <span aria-hidden="true">/</span>
            <span>{m.title}</span>
          </nav>
          <p className="pg-eyebrow">{m.category}</p>
          <h1 className="pg-title">{m.title}</h1>
          <p className="pg-lead">{m.description}</p>
          <p className="ms-article-date">{m.date}</p>
        </div>
      </header>

      <div className="ms-article-body">
        <article className="ms-prose">
          <MDXContent />
        </article>

        <footer className="ms-article-foot">
          <Link href={`${routes.home}#milestones`} className="ms-back">
            <span aria-hidden="true">←</span> Back to milestones
          </Link>
          <Link href={routes.contact} className="ms-article-cta">
            Get in touch
          </Link>
        </footer>
      </div>
    </div>
  );
}
