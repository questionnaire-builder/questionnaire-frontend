import { TextField, Button, Box } from "@mui/material";
import { createQuestion } from "../api/question";
import { useMutation } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { QuestionType } from "../types/question";

interface ITextTypeForm {
  quizId: string;
  type: QuestionType;
}

export function TextTypeForm({ quizId, type }: ITextTypeForm) {
  const { control, reset, handleSubmit } = useForm({
    defaultValues: { text: "" },
  });

  const { mutate, data } = useMutation({
    mutationFn: createQuestion,
    onSuccess: () => reset(),
  });

  const onSubmit = (formData: { text: string }) => {
    mutate({
      ...formData,
      quizId,
      type,
    });
  };

  if (data) console.log(data);

  return (
    <Box 
      mt={3} 
      mx="auto"
      maxWidth={400} 
      display="flex" 
      gap={2}
      flexDirection="column" 
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="text"
          control={control}
          rules={{ required: "text is require" }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Enter your question"
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />
        <Button variant="contained" type="submit" fullWidth>
          Submit
        </Button>
      </form>
    </Box>
  );
}
