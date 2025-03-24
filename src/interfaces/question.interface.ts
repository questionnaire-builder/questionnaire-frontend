export interface IQuestion {
  quizId: string;
  text: string;
  type: "text" | "single_choice" | "multiple_choice";
  options?: string[];
}
