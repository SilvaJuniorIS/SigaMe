import { Mail, MessageSquare } from "lucide-react";
import { NewsletterSection } from "@/components/NewsletterSection";
import { SectionHeading } from "@/components/ui";

export default function ContactPage() {
  return (
    <>
      <section className="section-spacing">
        <div className="page-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading eyebrow="Contato" title="Compartilhe sugestoes para o projeto">
            <p>Formulario visual preparado para receber mensagens em uma futura integracao.</p>
          </SectionHeading>
          <form className="grid gap-4 rounded-lg border border-parchment bg-warmWhite p-6 shadow-soft">
            <label className="grid gap-2 text-sm font-semibold text-deepBlue">
              Nome
              <input className="rounded-md border border-parchment px-4 py-3 font-normal outline-none focus:border-softGold" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-deepBlue">
              Email
              <div className="flex items-center gap-3 rounded-md border border-parchment px-4 py-3 focus-within:border-softGold">
                <Mail className="h-5 w-5 text-softOlive" aria-hidden="true" />
                <input className="w-full font-normal outline-none" type="email" />
              </div>
            </label>
            <label className="grid gap-2 text-sm font-semibold text-deepBlue">
              Mensagem
              <div className="flex gap-3 rounded-md border border-parchment px-4 py-3 focus-within:border-softGold">
                <MessageSquare className="mt-1 h-5 w-5 shrink-0 text-softOlive" aria-hidden="true" />
                <textarea className="min-h-32 w-full resize-y font-normal outline-none" />
              </div>
            </label>
            <button className="rounded-md bg-softGold px-5 py-3 text-sm font-bold text-deepBlue transition hover:bg-[#c99a3d]" type="button">
              Enviar mensagem
            </button>
          </form>
        </div>
      </section>
      <NewsletterSection />
    </>
  );
}
