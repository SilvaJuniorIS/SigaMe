import { StudyArchiveGrid } from "@/components/StudyArchiveGrid";
import { SectionHeading } from "@/components/ui";
import { weeklyStudies } from "@/data/weeklyStudies";

export default function StudiesPage() {
  return (
    <section className="section-spacing">
      <div className="page-shell">
        <SectionHeading eyebrow="Arquivo" title="Estudos anteriores">
          <p>Uma biblioteca simples para revisitar temas, perguntas e atividades semanais.</p>
        </SectionHeading>
        <div className="mt-8">
          <StudyArchiveGrid studies={weeklyStudies} />
        </div>
      </div>
    </section>
  );
}
