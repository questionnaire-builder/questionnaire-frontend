import { ChoiceForm } from "./ChoiceForm";
import { QuestionType } from "../../types/question";

interface ISingleChoiceForm {
  quizId: string;
  type: QuestionType;
}

export function SingleChoiceForm({ quizId, type }: ISingleChoiceForm) {
  return <ChoiceForm quizId={quizId} type={type} initialOptionsCount={2} />;
}
