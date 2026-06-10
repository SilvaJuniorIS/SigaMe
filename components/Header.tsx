import { BookOpen, Menu } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

const navItems = [
  { href: "/semana", label: "Semana" },
  { href: "/estudos", label: "Estudos" },
  { href: "/mensagens", label: "Mensagens" },
  { href: "/familia", label: "Familia" },
  { href: "/professores", label: "Professores" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" }
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-softGold/25 bg-deepBlue/95 backdrop-blur">
      <div className="page-shell flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex min-w-0 items-center gap-3 text-warmWhite">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-softGold/60 bg-nightBlue text-softGold">
            <BookOpen size={22} aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block font-heading text-xl font-semibold leading-6">{siteConfig.name}</span>
            <span className="hidden text-xs text-lightCream/80 sm:block">{siteConfig.subtitle}</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Navegacao principal">
          {navItems.map((item) => (
            <Link
              className="text-sm font-medium text-lightCream/90 transition hover:text-softGold"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <details className="relative lg:hidden">
          <summary
            className="inline-flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md border border-softGold/50 text-softGold marker:hidden"
            aria-label="Abrir menu"
            title="Menu"
          >
            <Menu size={22} aria-hidden="true" />
          </summary>
          <nav className="absolute right-0 mt-3 grid w-56 gap-1 rounded-lg border border-softGold/35 bg-deepBlue p-3 shadow-soft">
            {navItems.map((item) => (
              <Link
                className="rounded-md px-3 py-2 text-sm font-medium text-lightCream/90 transition hover:bg-warmWhite/10 hover:text-softGold"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
