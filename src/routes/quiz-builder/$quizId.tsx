import { createFileRoute } from "@tanstack/react-router";
import { Typography, Select, MenuItem, FormControl, InputLabel, Box } from "@mui/material";
import { ReactNode, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getQuizById, GET_QUIZ_BY_ID } from "../../api/quiz";
import { QUESTION_TYPES, QuestionType } from "../../types/question";
import { TextForm } from "../../components/question-forms/TextForm";
import { SingleChoiceForm  } from "../../components/question-forms/SingleChoiceForm";
import { MultipleChoiceForm } from "../../components/question-forms/MultipleChoiceForm";

export const Route = createFileRoute('/quiz-builder/$quizId')({
  component: RouteComponent,
});

function RouteComponent() {
  const { quizId } = Route.useParams();
  const [questionType, setQuestionType] = useState<QuestionType>("text");

  const { 
    error,
    isError, 
    data: quiz,
  } = useQuery({
    queryKey: [GET_QUIZ_BY_ID, quizId],
    queryFn: () => getQuizById(quizId),
  });

  if (isError) return <Typography>Error: {error.message}</Typography>;

  const questionComponents: Record<string, ReactNode | null> = {
    text: <TextForm quizId={quizId} type={questionType} />,
    single_choice: <SingleChoiceForm quizId={quizId} type={questionType} />,
    multiple_choice: <MultipleChoiceForm quizId={quizId} type={questionType} />,
  };

  return (
    <>
      <Box sx={{ p: 2, mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          {quiz?.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {quiz?.description}
        </Typography>
      </Box>

      <FormControl sx={{ maxWidth: 300, width: "100%", mx: "auto" }}>
        <InputLabel>Question Type</InputLabel>
        <Select
          value={questionType}
          label="Question Type"
          onChange={(e) => setQuestionType(e.target.value as QuestionType)}
        >
          {QUESTION_TYPES.map(({ value, label }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box mt={3}>{questionComponents[questionType] ?? null}</Box>
    </>
  );
}
