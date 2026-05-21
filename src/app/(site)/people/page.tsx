import type { Metadata } from "next";
import PeoplePageView from "@/components/pages/PeoplePageView";
import { pageMeta } from "@/data/content";

export const metadata: Metadata = {
  title: "People — VOITH",
  description: pageMeta.people.description,
};

export default function PeoplePage() {
  return <PeoplePageView />;
}
