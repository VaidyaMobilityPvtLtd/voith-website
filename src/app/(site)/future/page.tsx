import type { Metadata } from "next";
import FuturePageView from "@/components/pages/FuturePageView";
import { pageMeta } from "@/data/content";

export const metadata: Metadata = {
  title: "Future — VOITH",
  description: pageMeta.future.description,
};

export default function FuturePage() {
  return <FuturePageView />;
}
