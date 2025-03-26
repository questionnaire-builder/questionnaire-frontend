import { 
  Box, 
  Button, 
  Checkbox, 
  FormControl, 
  FormControlLabel, 
  FormGroup, 
  Typography 
} from "@mui/material";
import { useState } from "react";

interface IMultipleChoiceQuestion {
  question: string;
  options: string[];
  onSubmit: (answer: string | string[]) => void;
}

export function MultipleChoiceQuestion({ 
  question, 
  options, 
  onSubmit 
}: IMultipleChoiceQuestion) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setSelectedOptions((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedOptions.length === 0) return;
    onSubmit(selectedOptions);
    setSelectedOptions([]);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h6" align="center">
        {question}
      </Typography>
      <FormControl sx={{ display: "flex" }} component="form" onSubmit={handleSubmit}>
        <FormGroup sx={{ margin: "16px auto" }}>
          {options.map((option) => (
            <FormControlLabel
              key={option}
              value={option}
              control={<Checkbox checked={selectedOptions.includes(option)} onChange={handleChange} />}
              label={option}
            />
          ))}
        </FormGroup>
        <Button type="submit" variant="contained" fullWidth>
          Submit
        </Button>
      </FormControl>
    </Box>
  );
}
