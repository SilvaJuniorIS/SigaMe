import Link from "next/link";
import Image from "next/image";
import type { WeeklyStudy } from "@/data/weeklyStudies";
import { Card } from "@/components/ui";

export function StudyArchiveGrid({ studies }: { studies: WeeklyStudy[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {studies.map((study) => (
        <Card key={study.id} className="flex h-full flex-col overflow-hidden !p-0">
          {study.image ? (
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={study.image}
                alt={study.imageAlt ?? ""}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ) : null}
          <div className="flex flex-1 flex-col p-6">
            <p className="text-sm font-semibold text-softOlive">{study.weekRange}</p>
            <h3 className="mt-3 font-heading text-2xl font-semibold text-deepBlue">{study.title}</h3>
            <p className="mt-3 flex-1 leading-7 text-textSlate">{study.summary}</p>
            <Link
              className="mt-5 font-bold text-deepBlue underline decoration-softGold underline-offset-4"
              href={`/estudos/${study.slug}`}
            >
              Ler estudo
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
}
