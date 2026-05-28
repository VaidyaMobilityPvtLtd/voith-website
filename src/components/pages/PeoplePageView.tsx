import {
  boardOfDirectors,
  executiveTeam,
  pageMeta,
  voithFamily,
  voithFamilyStats,
} from "@/data/content";
import PageShell from "./PageShell";
import PeopleTabs from "./PeopleTabs";

const meta = pageMeta.people;

export default function PeoplePageView() {
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
      <PeopleTabs
        executiveTeam={executiveTeam}
        boardOfDirectors={boardOfDirectors}
        voithFamily={voithFamily}
        voithFamilyStats={voithFamilyStats}
      />
    </PageShell>
  );
}
