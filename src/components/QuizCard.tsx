import { Card, CardContent, Typography } from "@mui/material";

interface IQuizCard {
  quiz: {
    id: number;
    name: string;
    description: string;
    questions: number;
  };
}

export default function QuizCard({ quiz }: IQuizCard) {
  return (
    <Card variant="elevation" elevation={3}>
      <CardContent>
        <Typography variant="h6">{quiz.name}</Typography>
        <Typography variant="body2" sx={{ mt: 1, color: "text.secondary" }}>
          {quiz.description}
        </Typography>
        <Typography variant="body2" sx={{ mt: 5, color: "primary.main" }}>
          Questions: {quiz.questions}
        </Typography>
      </CardContent>
    </Card>
  );
}
