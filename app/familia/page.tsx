import { FamilyActivityCard } from "@/components/FamilyActivityCard";
import { SectionHeading } from "@/components/ui";
import { weeklyStudies } from "@/data/weeklyStudies";

export default function FamilyPage() {
  return (
    <section className="section-spacing">
      <div className="page-shell">
        <SectionHeading eyebrow="Familia" title="Atividades para estudo em casa">
          <p>Ideias simples para transformar o estudo semanal em conversa, pratica e compromisso familiar.</p>
        </SectionHeading>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {weeklyStudies.map((study) => (
            <FamilyActivityCard key={study.id} activity={study.familyActivity} />
          ))}
        </div>
      </div>
    </section>
  );
}
