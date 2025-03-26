import { ChoiceForm } from "./ChoiceForm";
import { QuestionType } from "../../types/question";

interface IMultipleChoiceForm {
  quizId: string;
  type: QuestionType;
}

export function MultipleChoiceForm({ quizId, type }: IMultipleChoiceForm) {
  return <ChoiceForm quizId={quizId} type={type} initialOptionsCount={3} />;
}
