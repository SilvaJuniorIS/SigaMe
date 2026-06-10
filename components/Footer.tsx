import Link from "next/link";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { href: "/semana", label: "Tema da semana" },
  { href: "/estudos", label: "Arquivo" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" }
];

export function Footer() {
  return (
    <footer className="bg-deepBlue text-lightCream">
      <div className="page-shell grid gap-8 py-10 md:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="font-heading text-2xl font-semibold text-warmWhite">{siteConfig.name}</p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-lightCream/85">{siteConfig.institutionalPhrase}</p>
          <p className="mt-4 max-w-3xl border-l-2 border-softGold pl-4 text-xs leading-6 text-lightCream/75">
            {siteConfig.disclaimer}
          </p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          {footerLinks.map((link) => (
            <Link className="text-sm text-lightCream/85 transition hover:text-softGold" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
          <a
            className="text-sm font-semibold text-softGold hover:text-lightCream"
            href={siteConfig.officialUrl}
            target="_blank"
            rel="noreferrer"
          >
            Material oficial
          </a>
        </div>
      </div>
    </footer>
  );
}
