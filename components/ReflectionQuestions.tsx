import { HelpCircle } from "lucide-react";
import { Card } from "@/components/ui";

export function ReflectionQuestions({ questions }: { questions: string[] }) {
  return (
    <Card>
      <div className="flex items-center gap-3">
        <HelpCircle className="h-6 w-6 text-softGold" aria-hidden="true" />
        <h3 className="font-heading text-2xl font-semibold text-deepBlue">Para ponderar</h3>
      </div>
      <ol className="mt-5 space-y-4">
        {questions.map((question, index) => (
          <li className="flex gap-3 leading-7 text-textSlate" key={question}>
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lightCream text-sm font-bold text-deepBlue">
              {index + 1}
            </span>
            <span>{question}</span>
          </li>
        ))}
      </ol>
    </Card>
  );
}
