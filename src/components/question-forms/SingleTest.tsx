import { Box, Button, TextField, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createQuestion } from "../../api/question";
import { QuestionType } from "../../types/question";

interface ISingleChoiceForm {
  quizId: string;
  type: QuestionType;
}

interface IFormData {
  text: string;
}

export function SingleTest({ quizId, type }: ISingleChoiceForm) {
  const [options, setOptions] = useState(["", ""]);
  const [optionsError, setOptionsError] = useState(false);

  const { control, handleSubmit, reset } = useForm<IFormData>({
    defaultValues: { text: "" },
  });

  const { mutate, data } = useMutation({
    mutationFn: createQuestion,
    onSuccess: () => {
      reset();
      setOptions(["", ""]);
      setOptionsError(false);
    },
  });

  const handleAddOption = () => {
    setOptions((prevOptions) => [...prevOptions, ""]);
  };

  const handleRemoveOption = (index: number) => {
    setOptions((prevOptions) => prevOptions.filter((_, i) => i !== index));
  };

  const handleOptionChange = (index: number, value: string) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const onSubmit = (formData: IFormData) => {
    if (options.some(option => !option.trim())) {
      setOptionsError(true);
      return;
    }

    mutate({
      ...formData,
      quizId,
      type,
      options,
    });
  };

  if (data) console.log(data);

  return (
    <Box mt={3} mx="auto" maxWidth={400} display="flex" flexDirection="column" gap={2}>
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

        <Typography variant="body1" sx={{ mt: 4, mb: 2 }}>
          Options:
        </Typography>
        {options.map((option, index) => (
          <Box key={index} display="flex" sx={{ mb: 2, gap: 2 }}>
            <TextField
              fullWidth
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              error={optionsError && !option.trim()}
            />
            {options.length > 2 && (
              <Button
                variant="outlined"
                color="error"
                onClick={() => handleRemoveOption(index)}
              >
                <DeleteIcon />
              </Button>
            )}
          </Box>
        ))}

        <Button variant="outlined" sx={{ mt: 2 }} onClick={handleAddOption} size="large" fullWidth>
          Add Option
        </Button>

        <Button variant="contained" sx={{ mt: 2 }} type="submit" size="large" fullWidth>
          Submit
        </Button>
      </form>
    </Box>
  );
}
