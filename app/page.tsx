import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { FamilyActivityCard } from "@/components/FamilyActivityCard";
import { HeroSection } from "@/components/HeroSection";
import { MessageCard } from "@/components/MessageCard";
import { NewsletterSection } from "@/components/NewsletterSection";
import { OfficialLinks } from "@/components/OfficialLinks";
import { ReflectionQuestions } from "@/components/ReflectionQuestions";
import { SectionHeading } from "@/components/ui";
import { TeacherSupportCard } from "@/components/TeacherSupportCard";
import { WeeklyThemeCard } from "@/components/WeeklyThemeCard";
import { getLatestStudy } from "@/data/weeklyStudies";

export default function Home() {
  const latestStudy = getLatestStudy();

  return (
    <>
      <HeroSection />
      <DisclaimerBanner />
      <section className="section-spacing">
        <div className="page-shell">
          <SectionHeading eyebrow="Tema da semana" title={latestStudy.title}>
            <p>
              {latestStudy.weekRange}. Comece com a referencia, pondere a mensagem central e leve uma pergunta para sua
              oracao pessoal.
            </p>
          </SectionHeading>
          <div className="mt-8">
            <WeeklyThemeCard study={latestStudy} />
          </div>
        </div>
      </section>
      <section className="bg-lightCream section-spacing">
        <div className="page-shell grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <MessageCard
            title="Mensagem da semana"
            message={latestStudy.mainMessage}
          />
          <ReflectionQuestions questions={latestStudy.reflectionQuestions} />
        </div>
      </section>
      <section className="section-spacing">
        <div className="page-shell grid gap-6 md:grid-cols-2">
          <FamilyActivityCard activity={latestStudy.familyActivity} />
          <TeacherSupportCard ideas={latestStudy.teacherIdeas} />
        </div>
      </section>
      <section className="bg-lightCream section-spacing">
        <div className="page-shell">
          <OfficialLinks />
        </div>
      </section>
      <NewsletterSection />
    </>
  );
}
