export interface IQuiz {
  _id?: string;
  name: string;
  description: string;
  questions?: string[];
  completions?: number;
}
