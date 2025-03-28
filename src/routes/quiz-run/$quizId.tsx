import { createFileRoute } from "@tanstack/react-router";
import { ReactNode, useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getQuestionsByQuizId, GET_QUESTIONS_BY_QUIZ_ID } from "../../api/question";
import { createAnswer } from "../../api/answer";
import { IAnswer } from "../../interfaces/answer.interface";
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

  const { mutate } = useMutation({
    mutationFn: createAnswer,
  });

  const handleFinishQuiz = () => navigate({ to: "/" });

  const {
    error,
    isError, 
    data: questions,
  } = useQuery({
    queryKey: [GET_QUESTIONS_BY_QUIZ_ID, quizId],
    queryFn: () => getQuestionsByQuizId(quizId),
  });

  if (isError) return <Typography>Error: {error.message}</Typography>;

  if (!questions || questions.length === 0) {
    return <Typography>There are no questions yet, please create some.</Typography>
  }

  const currentQuestion = questions?.[currentQuestionIndex];

  const questionComponents: Record<string, ReactNode | null> = {
    text: (
      <TextQuestion 
        question={currentQuestion.text} 
        onSubmit={(answer) => handleSubmit(answer)} 
      />
    ),
    single_choice: (
      <SingleChoiceQuestion 
        question={currentQuestion.text} 
        options={currentQuestion.options} 
        onSubmit={(answer) => handleSubmit(answer)} 
      />
    ),
    multiple_choice: (
      <MultipleChoiceQuestion 
        question={currentQuestion.text} 
        options={currentQuestion.options} 
        onSubmit={(answer) => handleSubmit(answer)} 
      />
    ),
  };

  const handleSubmit = (answerValue: string | string[]) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) return;

    const answerData: IAnswer = {
      questionId: currentQuestion._id,
      answer: answerValue,
    };
    mutate(answerData);

    if (currentQuestionIndex === questions.length - 1) {
      setIsQuizFinished(true);
      return;
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
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
