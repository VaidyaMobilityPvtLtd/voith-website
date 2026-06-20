import type { Metadata } from "next";
import IndustriesPageView from "@/components/pages/IndustriesPageView";
import { pageMeta } from "@/data/content";

export const metadata: Metadata = {
  title: "Industries · VOITH",
  description: pageMeta.industries.description,
};

export default function IndustriesPage() {
  return <IndustriesPageView />;
}

