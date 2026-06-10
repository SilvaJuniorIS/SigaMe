import { TeacherSupportCard } from "@/components/TeacherSupportCard";
import { SectionHeading } from "@/components/ui";
import { weeklyStudies } from "@/data/weeklyStudies";

export default function TeachersPage() {
  return (
    <section className="section-spacing">
      <div className="page-shell">
        <SectionHeading eyebrow="Professores" title="Ideias para aulas e debates">
          <p>Apoio para preparar conversas reverentes, participativas e centradas em aplicacao pessoal.</p>
        </SectionHeading>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {weeklyStudies.map((study) => (
            <TeacherSupportCard key={study.id} ideas={study.teacherIdeas} />
          ))}
        </div>
      </div>
    </section>
  );
}
