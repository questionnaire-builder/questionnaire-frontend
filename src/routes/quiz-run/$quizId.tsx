import { createFileRoute } from "@tanstack/react-router";
import { ReactNode, useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getQuestionsByQuizId, GET_QUESTIONS_BY_QUIZ_ID } from "../../api/question";
import { TextQuestion } from "../../components/questions/TextQuestion";
import { SingleChoiceQuestion } from "../../components/questions/SingleChoiceQuestion";
import { MultipleChoiceQuestion } from "../../components/questions/MultipleChoiceQuestion";

export const Route = createFileRoute('/quiz-run/$quizId')({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const { quizId } = Route.useParams();
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const { 
    error,
    isError, 
    data: questions,
  } = useQuery({
    queryKey: [GET_QUESTIONS_BY_QUIZ_ID, quizId],
    queryFn: () => getQuestionsByQuizId(quizId),
  });

  console.log(questions);

  if (isError) return <Typography>Error: {error.message}</Typography>;

  if (!questions || questions.length === 0) {
    return <Typography>There are no questions yet, please create some.</Typography>
  }

  const handleSubmit = () => {
    if (currentQuestionIndex === questions.length - 1) {
      setIsQuizFinished(true);
      return;
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleFinishQuiz = () => navigate({ to: "/" });

  const currentQuestion = questions?.[currentQuestionIndex];

  const questionComponents: Record<string, ReactNode | null> = {
    text: <TextQuestion question={currentQuestion.text} onSubmit={handleSubmit} />,
    single_choice: <SingleChoiceQuestion question={currentQuestion.text} options={currentQuestion.options} onSubmit={handleSubmit} />,
    multiple_choice: <MultipleChoiceQuestion question={currentQuestion.text} options={currentQuestion.options} onSubmit={handleSubmit} />,
  };

  return (
    <Container
      sx={{
        py: 2,
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      maxWidth="sm"
    >
      {!isQuizFinished && currentQuestion ? (
        <>
          {questionComponents[currentQuestion.type] ?? null}
        </>
      ) : null}

      {isQuizFinished && (
        <Box display={"flex"} alignItems={"center"} gap={2}>
          <Typography variant="h6" align="center">
            There are no more questions!
          </Typography>
          <Button
            variant="outlined"
            onClick={handleFinishQuiz}
          >
            Finish Quiz
          </Button>
        </Box>
      )}
    </Container>
  );
}
