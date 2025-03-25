export const QUESTION_TYPES = [
  { value: "text", label: "Text" },
  { value: "single_choice", label: "Single Choice" },
  { value: "multiple_choice", label: "Multiple Choice" },
] as const;

export type QuestionType = (typeof QUESTION_TYPES)[number]["value"];
