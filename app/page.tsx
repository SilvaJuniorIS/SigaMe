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
import { getLatestStudy, weeklyStudies } from "@/data/weeklyStudies";

export default function Home() {
  const latestStudy = getLatestStudy();
  const featuredStudies = weeklyStudies.slice(0, 2);

  return (
    <>
      <HeroSection />
      <DisclaimerBanner />
      <section className="section-spacing">
        <div className="page-shell">
          <SectionHeading eyebrow="Duas semanas de estudo" title="Mensagens para hoje e para a próxima semana">
            <p>
              Avance no seu ritmo: comece pelo tema atual e deixe o próximo estudo preparado para continuar.
            </p>
          </SectionHeading>
          <div className="mt-8 space-y-8">
            {featuredStudies.map((study) => (
              <WeeklyThemeCard study={study} key={study.id} />
            ))}
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
