import { Info } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function DisclaimerBanner() {
  return (
    <div className="border-y border-softGold/35 bg-lightCream">
      <div className="page-shell flex gap-3 py-4 text-sm leading-6 text-textSlate">
        <Info className="mt-0.5 h-5 w-5 shrink-0 text-softOlive" aria-hidden="true" />
        <p>
          Este site e um projeto independente e nao representa oficialmente A Igreja de Jesus Cristo dos Santos dos
          Ultimos Dias. Conteudos oficiais estao disponiveis em{" "}
          <a
            className="font-semibold text-deepBlue underline decoration-softGold underline-offset-4"
            href={siteConfig.officialUrl}
            target="_blank"
            rel="noreferrer"
          >
            ChurchofJesusChrist.org
          </a>
          .
        </p>
      </div>
    </div>
  );
}
