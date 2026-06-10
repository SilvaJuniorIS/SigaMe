import { UsersRound } from "lucide-react";
import { Card } from "@/components/ui";

export function TeacherSupportCard({ ideas }: { ideas: string }) {
  return (
    <Card>
      <UsersRound className="h-7 w-7 text-softGold" aria-hidden="true" />
      <h3 className="mt-4 font-heading text-2xl font-semibold text-deepBlue">Para professores</h3>
      <p className="mt-3 leading-7 text-textSlate">{ideas}</p>
    </Card>
  );
}
