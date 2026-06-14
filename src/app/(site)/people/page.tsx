import type { Metadata } from "next";
import PeoplePageView from "@/components/pages/PeoplePageView";
import { pageMeta } from "@/data/content";

export const metadata: Metadata = {
  title: "People — VOITH",
  description: pageMeta.people.description,
};

// Refresh the page (and the fetched employee directory) at most once a day.
export const revalidate = 86_400;

export default function PeoplePage() {
  return <PeoplePageView />;
}
