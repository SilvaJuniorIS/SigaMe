import { ArrowRight, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { PrimaryLink, SecondaryLink } from "@/components/ui";

export function HeroSection() {
  return (
    <section className="spiritual-light relative overflow-hidden text-warmWhite">
      <div className="absolute left-1/2 top-24 h-40 w-1 -translate-x-1/2 rounded-full bg-softGold/60 blur-sm" />
      <div className="page-shell relative grid min-h-[620px] items-center gap-10 py-20 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-softGold">{siteConfig.subtitle}</p>
          <h1 className="font-heading text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            Estude, pondere e siga a luz de Cristo a cada semana.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-lightCream">
            Conteudos inspirados no estudo semanal do Vem, e Segue-Me para fortalecer o aprendizado pessoal, familiar e
            na Igreja.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryLink href="/semana">
              Ver tema da semana <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </PrimaryLink>
            <SecondaryLink href={siteConfig.officialUrl} external>
              Acessar estudo oficial <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
            </SecondaryLink>
          </div>
        </div>
        <div className="relative min-h-[300px] lg:min-h-[460px]" aria-hidden="true">
          <div className="absolute inset-x-8 bottom-14 h-24 rounded-[50%] bg-softGold/20 blur-2xl" />
          <div className="absolute left-1/2 top-8 h-16 w-16 -translate-x-1/2 rounded-full bg-softGold shadow-[0_0_80px_rgba(214,168,79,0.85)]" />
          <div className="absolute left-1/2 top-24 h-64 w-2 -translate-x-1/2 bg-gradient-to-b from-softGold/90 to-transparent" />
          <div className="absolute bottom-8 left-1/2 h-64 w-[72%] -translate-x-1/2 rounded-t-full border-t-2 border-softGold/50 bg-gradient-to-t from-lightCream/20 to-transparent" />
          <div className="absolute bottom-4 left-1/2 grid w-[78%] -translate-x-1/2 grid-cols-2 gap-2 rounded-md border border-softGold/40 bg-warmWhite/10 p-4 backdrop-blur-sm">
            <div className="h-28 rounded-sm border border-lightCream/20 bg-lightCream/15" />
            <div className="h-28 rounded-sm border border-lightCream/20 bg-lightCream/15" />
          </div>
        </div>
      </div>
    </section>
  );
}
