import type { Metadata } from "next";
import ImpactPageView from "@/components/pages/ImpactPageView";
import { pageMeta } from "@/data/content";

export const metadata: Metadata = {
  title: "Impact · VOITH",
  description: pageMeta.impact.description,
};

export default function ImpactPage() {
  return <ImpactPageView />;
}
