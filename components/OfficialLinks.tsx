import { ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Card } from "@/components/ui";

export function OfficialLinks() {
  return (
    <Card className="bg-lightCream">
      <h3 className="font-heading text-2xl font-semibold text-deepBlue">Links oficiais</h3>
      <p className="mt-3 leading-7 text-textSlate">
        Para consultar o manual, escrituras, discursos e demais materiais oficiais, use os recursos publicados pela
        Igreja em seu site oficial.
      </p>
      <a
        className="mt-5 inline-flex items-center justify-center rounded-md bg-softGold px-5 py-3 text-sm font-bold text-deepBlue transition hover:bg-[#c99a3d]"
        href={siteConfig.officialUrl}
        target="_blank"
        rel="noreferrer"
      >
        Acessar ChurchofJesusChrist.org <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
      </a>
      <p className="mt-4 text-sm leading-6 text-textSlate">{siteConfig.disclaimer}</p>
    </Card>
  );
}
