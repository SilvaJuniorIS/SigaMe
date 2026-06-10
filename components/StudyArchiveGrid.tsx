import Link from "next/link";
import type { WeeklyStudy } from "@/data/weeklyStudies";
import { Card } from "@/components/ui";

export function StudyArchiveGrid({ studies }: { studies: WeeklyStudy[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {studies.map((study) => (
        <Card key={study.id} className="flex h-full flex-col">
          <p className="text-sm font-semibold text-softOlive">{study.weekRange}</p>
          <h3 className="mt-3 font-heading text-2xl font-semibold text-deepBlue">{study.title}</h3>
          <p className="mt-3 flex-1 leading-7 text-textSlate">{study.summary}</p>
          <Link className="mt-5 font-bold text-deepBlue underline decoration-softGold underline-offset-4" href={`/estudos/${study.slug}`}>
            Ler estudo
          </Link>
        </Card>
      ))}
    </div>
  );
}
