import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BrandPageView from "@/components/pages/BrandPageView";
import {
  allChildBrandParams,
  getChildBrand,
  sectorOrder,
  type SectorSlug,
} from "@/data/content";

type Params = { slug: string; company: string; brand: string };

export function generateStaticParams(): Array<{
  slug: SectorSlug;
  company: string;
  brand: string;
}> {
  return allChildBrandParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug, company, brand } = await params;
  const data = getChildBrand(slug as SectorSlug, company, brand);
  if (!data) return { title: "Industries — VOITH" };
  return {
    title: `${data.name} — VOITH`,
    description: data.description,
  };
}

export default async function BrandPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug, company, brand } = await params;
  if (!sectorOrder.includes(slug as SectorSlug)) notFound();
  if (!getChildBrand(slug as SectorSlug, company, brand)) notFound();
  return (
    <BrandPageView
      slug={slug as SectorSlug}
      companySlug={company}
      brandSlug={brand}
    />
  );
}
