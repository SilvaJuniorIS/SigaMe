import { Mail } from "lucide-react";

export function NewsletterSection() {
  return (
    <section className="bg-lightCream">
      <div className="page-shell section-spacing grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-softOlive">Receba novidades</p>
          <h2 className="font-heading text-3xl font-semibold text-deepBlue sm:text-4xl">
            Estudos semanais no seu ritmo.
          </h2>
          <p className="mt-4 leading-7 text-textSlate">
            Formulario visual preparado para uma futura integracao de newsletter.
          </p>
        </div>
        <form className="grid gap-3 rounded-lg border border-parchment bg-warmWhite p-4 shadow-soft sm:grid-cols-[1fr_auto]">
          <label className="sr-only" htmlFor="newsletter-email">
            Email
          </label>
          <div className="flex items-center gap-3 rounded-md border border-parchment bg-warmWhite px-4 py-3">
            <Mail className="h-5 w-5 text-softOlive" aria-hidden="true" />
            <input
              className="w-full bg-transparent text-sm text-textSlate outline-none placeholder:text-slate-400"
              id="newsletter-email"
              placeholder="seuemail@exemplo.com"
              type="email"
            />
          </div>
          <button className="rounded-md bg-softGold px-5 py-3 text-sm font-bold text-deepBlue transition hover:bg-[#c99a3d]" type="button">
            Inscrever
          </button>
        </form>
      </div>
    </section>
  );
}
