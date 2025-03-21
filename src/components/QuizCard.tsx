import { Box, Card, CardContent, Typography } from "@mui/material";
import QuizMenu from "./QuizMenu";

interface IQuizCard {
  quiz: {
    id: number;
    name: string;
    description: string;
    questions: number;
    completions: number;
  };
}

export default function QuizCard({ quiz }: IQuizCard) {
  const handleEdit = () => {
    console.log(`Edit quiz ${quiz.id}`);
  };

  const handleRun = () => {
    console.log(`Run quiz ${quiz.id}`);
  };

  const handleDelete = () => {
    console.log(`Delete quiz ${quiz.id}`);
  };

  return (
    <Card variant="elevation" elevation={3} sx={{ position: "relative" }}>
      <Box sx={{ position: "absolute", top: 12, right: 0 }}>
        <QuizMenu onEdit={handleEdit} onRun={handleRun} onDelete={handleDelete} />
      </Box>
      <CardContent>
        <Typography variant="h6">{quiz.name}</Typography>
        <Typography variant="body2" sx={{ mt: 1, color: "text.secondary" }}>
          {quiz.description}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <Typography variant="body2" sx={{ mt: 5, color: "primary.main" }}>
            Questions: {quiz.questions}
          </Typography>
          <Typography variant="body2" sx={{ mt: 5, color: "success.main" }}>
            Completions: {quiz.completions}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
