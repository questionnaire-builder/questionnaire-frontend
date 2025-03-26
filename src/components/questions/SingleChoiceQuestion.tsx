import { 
  Box, 
  Button, 
  FormControl, 
  FormControlLabel, 
  Radio, 
  RadioGroup, 
  Typography 
} from "@mui/material";

interface ISingleChoiceQuestion {
  question: string;
  options: string[];
  onSubmit: () => void;
}

export function SingleChoiceQuestion({ 
  question, 
  options, 
  onSubmit
}: ISingleChoiceQuestion) {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h6" align="center">
        {question}
      </Typography>
      <FormControl sx={{ display: "flex" }}>
        <RadioGroup sx={{ margin: "16px auto" }}>
          {options.map((option) => (
            <FormControlLabel
              key={option}
              value={option}
              control={<Radio />}
              label={option}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <Button type="submit" variant="contained" fullWidth onClick={onSubmit}>
        Submit
      </Button>
    </Box>
  );
}
