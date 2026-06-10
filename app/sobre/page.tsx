import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { OfficialLinks } from "@/components/OfficialLinks";
import { SectionHeading } from "@/components/ui";
import { siteConfig } from "@/lib/site";

export default function AboutPage() {
  return (
    <>
      <section className="bg-lightCream section-spacing">
        <div className="page-shell">
          <SectionHeading eyebrow="Sobre" title="Um projeto independente de apoio ao estudo">
            <p>{siteConfig.institutionalPhrase}</p>
          </SectionHeading>
        </div>
      </section>
      <DisclaimerBanner />
      <section className="section-spacing">
        <div className="page-shell grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-5 leading-7 text-textSlate">
            <p>
              O Siga a Luz organiza mensagens, perguntas e ideias originais para ajudar individuos, familias, lideres e
              professores a se prepararem para o estudo semanal.
            </p>
            <p>
              O objetivo e apoiar a reflexao pessoal e encaminhar os visitantes para os materiais oficiais, sem substituir
              o manual, as escrituras ou as orientacoes publicadas pela Igreja.
            </p>
          </div>
          <OfficialLinks />
        </div>
      </section>
    </>
  );
}
