import { 
  Box, 
  Button, 
  FormControl, 
  FormControlLabel, 
  Radio, 
  RadioGroup, 
  Typography 
} from "@mui/material";
import { useState } from "react";

interface ISingleChoiceQuestion {
  question: string;
  options: string[];
  onSubmit: (answer: string | string[]) => void;
}

export function SingleChoiceQuestion({ 
  question, 
  options, 
  onSubmit
}: ISingleChoiceQuestion) {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedOption) return;
    onSubmit(selectedOption);
    setSelectedOption("");
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h6" align="center">
        {question}
      </Typography>
      <FormControl sx={{ display: "flex" }} component="form" onSubmit={handleSubmit}>
        <RadioGroup 
          sx={{ margin: "16px auto" }}
          value={selectedOption} 
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          {options.map((option) => (
            <FormControlLabel
              key={option}
              value={option}
              control={<Radio />}
              label={option}
            />
          ))}
        </RadioGroup>
        <Button type="submit" variant="contained" fullWidth>
          Submit
        </Button>
      </FormControl>
    </Box>
  );
}
