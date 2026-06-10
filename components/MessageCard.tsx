import { SunMedium } from "lucide-react";
import { Card } from "@/components/ui";

export function MessageCard({ title, message }: { title: string; message: string }) {
  return (
    <Card className="bg-deepBlue text-lightCream">
      <SunMedium className="h-8 w-8 text-softGold" aria-hidden="true" />
      <h3 className="mt-4 font-heading text-3xl font-semibold text-warmWhite">{title}</h3>
      <p className="mt-4 font-scripture text-lg leading-8 text-lightCream">{message}</p>
    </Card>
  );
}
