import { notFound } from "next/navigation";
import { FamilyActivityCard } from "@/components/FamilyActivityCard";
import { OfficialLinks } from "@/components/OfficialLinks";
import { ReflectionQuestions } from "@/components/ReflectionQuestions";
import { ScriptureCard } from "@/components/ScriptureCard";
import { SectionHeading } from "@/components/ui";
import { TeacherSupportCard } from "@/components/TeacherSupportCard";
import { getStudyBySlug, weeklyStudies } from "@/data/weeklyStudies";

export function generateStaticParams() {
  return weeklyStudies.map((study) => ({
    slug: study.slug
  }));
}

export default async function StudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <section className="bg-lightCream section-spacing">
        <div className="page-shell">
          <SectionHeading eyebrow={study.weekRange} title={study.title}>
            <p>{study.summary}</p>
          </SectionHeading>
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
