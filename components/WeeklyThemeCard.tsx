import { CalendarDays, ExternalLink } from "lucide-react";
import Image from "next/image";
import type { WeeklyStudy } from "@/data/weeklyStudies";
import { Card, PrimaryLink } from "@/components/ui";

export function WeeklyThemeCard({ study }: { study: WeeklyStudy }) {
  return (
    <Card className="overflow-hidden !p-0">
      {study.image ? (
        <div className="relative aspect-[16/7] min-h-56 overflow-hidden">
          <Image
            src={study.image}
            alt={study.imageAlt ?? ""}
            fill
            className="object-cover"
            sizes="(max-width: 1152px) 100vw, 1152px"
            priority={study.id === "2026-27"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-nightBlue/70 via-transparent to-transparent" />
        </div>
      ) : null}
      <div className="grid gap-6 p-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-lg bg-lightCream p-5">
          <p className="flex items-center gap-2 text-sm font-semibold text-softOlive">
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            {study.weekRange}
          </p>
          <h3 className="mt-4 font-heading text-3xl font-semibold text-deepBlue">{study.title}</h3>
          <p className="mt-3 font-scripture text-base leading-7 text-textSlate">{study.scriptureReference}</p>
        </div>
        <div>
          <p className="font-scripture text-xl leading-8 text-deepBlue">{study.mainMessage}</p>
          <p className="mt-4 leading-7 text-textSlate">{study.summary}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <PrimaryLink href={`/estudos/${study.slug}`}>Abrir estudo</PrimaryLink>
            <a
              className="inline-flex items-center justify-center rounded-md border border-softGold px-5 py-3 text-sm font-bold text-deepBlue transition hover:bg-lightCream"
              href={study.officialLink}
              target="_blank"
              rel="noreferrer"
            >
              Material oficial <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
}
