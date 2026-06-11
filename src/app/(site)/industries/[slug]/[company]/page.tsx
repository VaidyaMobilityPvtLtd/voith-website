import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CompanyPageView from "@/components/pages/CompanyPageView";
import {
  allCompanyParams,
  getSectorBrand,
  sectorOrder,
  type SectorSlug,
} from "@/data/content";

type Params = { slug: string; company: string };

export function generateStaticParams(): Array<{ slug: SectorSlug; company: string }> {
  return allCompanyParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug, company } = await params;
  const data = getSectorBrand(slug as SectorSlug, company);
  if (!data) return { title: "Industries — VOITH" };
  return {
    title: `${data.name} — VOITH`,
    description: data.description,
  };
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug, company } = await params;
  if (!sectorOrder.includes(slug as SectorSlug)) notFound();
  if (!getSectorBrand(slug as SectorSlug, company)) notFound();
  return <CompanyPageView slug={slug as SectorSlug} companySlug={company} />;
}
