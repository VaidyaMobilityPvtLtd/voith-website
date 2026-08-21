import {
  founder,
  management,
  pageMeta,
  voithFamily,
  voithFamilyStats,
} from "@/data/content";
import { getEmployees } from "@/lib/employees";
import PageShell from "./PageShell";
import PeopleView from "./PeopleView";

const meta = pageMeta.people;

export default async function PeoplePageView() {
  const employees = await getEmployees();

  return (
    <PageShell
      theme="people"
      eyebrow={meta.eyebrow}
      title={meta.title}
      description={meta.description}
      stat={meta.stat}
      statLabel={meta.statLabel}
      heroImage={meta.heroImage}
    >
      <PeopleView
        founder={founder}
        management={management}
        voithFamily={voithFamily}
        voithFamilyStats={voithFamilyStats}
        employees={employees}
      />
    </PageShell>
  );
}
