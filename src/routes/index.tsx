import { createFileRoute } from "@tanstack/react-router";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import QuizCard from "../components/QuizCard";

export const Route = createFileRoute('/')({
  component: Index,
});

const quizzes = [
  { id: 1, name: "Quiz 1", description: "Description for Quiz 1", questions: 10, completions: 25 },
  { id: 2, name: "Quiz 2", description: "Description for Quiz 2", questions: 15, completions: 30 },
  { id: 3, name: "Quiz 3", description: "Description for Quiz 3", questions: 20, completions: 40 },
  { id: 4, name: "Quiz 4", description: "Description for Quiz 4", questions: 5, completions: 10 },
  { id: 5, name: "Quiz 5", description: "Description for Quiz 5", questions: 7, completions: 15 },
  { id: 6, name: "Quiz 6", description: "Description for Quiz 6", questions: 40, completions: 50 },
];

function Index() {
  return (
    <>
      <Box p={2}>
        <Typography variant="h5" mb={4}>Quiz Catalog</Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {quizzes.map((quiz) => (
              <Grid key={quiz.id} size={{ xs: 2, sm: 4, md: 4 }}>
                <QuizCard quiz={quiz} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}
