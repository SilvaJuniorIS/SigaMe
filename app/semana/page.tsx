import { FamilyActivityCard } from "@/components/FamilyActivityCard";
import { OfficialLinks } from "@/components/OfficialLinks";
import { ReflectionQuestions } from "@/components/ReflectionQuestions";
import { ScriptureCard } from "@/components/ScriptureCard";
import { SectionHeading } from "@/components/ui";
import { TeacherSupportCard } from "@/components/TeacherSupportCard";
import { WeeklyThemeCard } from "@/components/WeeklyThemeCard";
import { getLatestStudy } from "@/data/weeklyStudies";

export default function WeekPage() {
  const study = getLatestStudy();

  return (
    <>
      <section className="bg-lightCream section-spacing">
        <div className="page-shell">
          <SectionHeading eyebrow="Tema da semana" title={study.title}>
            <p>{study.weekRange}</p>
          </SectionHeading>
          <div className="mt-8">
            <WeeklyThemeCard study={study} />
          </div>
        </div>
      </section>
      <section className="section-spacing">
        <div className="page-shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <ScriptureCard reference={study.scriptureReference} message={study.mainMessage} />
          <ReflectionQuestions questions={study.reflectionQuestions} />
        </div>
      </section>
      <section className="bg-lightCream section-spacing">
        <div className="page-shell grid gap-6 md:grid-cols-2">
          <FamilyActivityCard activity={study.familyActivity} />
          <TeacherSupportCard ideas={study.teacherIdeas} />
        </div>
      </section>
      <section className="section-spacing">
        <div className="page-shell">
          <OfficialLinks />
        </div>
      </section>
    </>
  );
}
