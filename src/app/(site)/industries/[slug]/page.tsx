import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SectorPageView from "@/components/pages/SectorPageView";
import { sectorOrder, sectorPages, type SectorSlug } from "@/data/content";

type Params = { slug: string };

export function generateStaticParams(): Array<{ slug: SectorSlug }> {
  return sectorOrder.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = sectorPages[slug as SectorSlug];
  if (!data) return { title: "Industries — VOITH" };
  return {
    title: `${data.label} — VOITH`,
    description: data.description,
  };
}

export default async function SectorPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  if (!sectorOrder.includes(slug as SectorSlug)) notFound();
  return <SectorPageView slug={slug as SectorSlug} />;
}
