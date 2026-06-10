import { Home } from "lucide-react";
import { Card } from "@/components/ui";

export function FamilyActivityCard({ activity }: { activity: string }) {
  return (
    <Card>
      <Home className="h-7 w-7 text-softOlive" aria-hidden="true" />
      <h3 className="mt-4 font-heading text-2xl font-semibold text-deepBlue">Para a familia</h3>
      <p className="mt-3 leading-7 text-textSlate">{activity}</p>
    </Card>
  );
}
