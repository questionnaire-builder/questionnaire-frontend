import { QuestionType } from "../types/question";

export interface IQuestion {
  _id?: string;
  quizId: string;
  text: string;
  type: QuestionType;
  options?: string[];
}
