import { Box, Card, CardContent, Typography } from "@mui/material";
import QuizMenu from "./QuizMenu";
import { IQuiz } from "../interfaces/quiz.interface";
import { deleteQuizById, GET_ALL_QUIZZES } from "../api/quizzes";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface IQuizData {
  quiz: IQuiz;
}

export default function QuizCard({ quiz }: IQuizData) {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteQuizById,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_ALL_QUIZZES] });
    },
    onError: (error) => {
      console.error("Error deleting quiz:", error);
    },
  });

  const handleEdit = () => {
    console.log(`Edit quiz ${quiz._id}`);
  };

  const handleRun = () => {
    console.log(`Run quiz ${quiz._id}`);
  };

  const handleDelete = () => {
    if (quiz._id) {
      deleteMutation.mutate(quiz._id);
      console.log(`Delete quiz ${quiz._id}`);
    }
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
            Questions: {quiz.questions?.length ?? 0}
          </Typography>
          <Typography variant="body2" sx={{ mt: 5, color: "success.main" }}>
            Completions: {quiz.completions ?? 0}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
