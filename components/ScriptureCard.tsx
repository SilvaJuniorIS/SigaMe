import { BookMarked } from "lucide-react";
import { Card } from "@/components/ui";

export function ScriptureCard({ reference, message }: { reference: string; message: string }) {
  return (
    <Card className="border-l-4 border-l-softOlive">
      <BookMarked className="h-7 w-7 text-softOlive" aria-hidden="true" />
      <p className="mt-4 font-scripture text-xl leading-8 text-deepBlue">{message}</p>
      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-softOlive">{reference}</p>
    </Card>
  );
}
