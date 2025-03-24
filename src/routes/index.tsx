import { createFileRoute } from "@tanstack/react-router";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import QuizCard from "../components/QuizCard";
import { useQuery } from "@tanstack/react-query";
import { IQuiz } from "../interfaces/quiz.interface";
import { getAllQuizzes, GET_ALL_QUIZZES } from "../api/quiz";
import CreateQuizButton from "../components/create-quiz/CreateQuizButton";

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  const { 
    error, 
    isError, 
    data: quizzes,
  } = useQuery({
    queryKey: [GET_ALL_QUIZZES],
    queryFn: () => getAllQuizzes(),
  });

  if (isError) return <Typography>Error: {error.message}</Typography>;

  return (
    <>
      <Box p={2}>
        <Box mb={4} display={"flex"} justifyContent="space-between" alignItems="center">
          <Typography variant="h5">Quiz Catalog</Typography>
          <CreateQuizButton />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {quizzes?.map((quiz: IQuiz) => (
              <Grid key={quiz._id} size={{ xs: 2, sm: 4, md: 4 }}>
                <QuizCard quiz={quiz} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}
