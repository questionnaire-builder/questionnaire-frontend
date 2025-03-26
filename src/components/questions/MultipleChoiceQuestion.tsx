import { 
  Box, 
  Button, 
  Checkbox, 
  FormControl, 
  FormControlLabel, 
  FormGroup, 
  Typography 
} from "@mui/material";

interface IMultipleChoiceQuestion {
  question: string;
  options: string[];
  onSubmit: () => void;
}

export function MultipleChoiceQuestion({ 
  question, 
  options, 
  onSubmit 
}: IMultipleChoiceQuestion) {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h6" align="center">
        {question}
      </Typography>
      <FormControl sx={{ display: "flex" }}>
        <FormGroup sx={{ margin: "16px auto" }}>
          {options.map((option) => (
            <FormControlLabel
              key={option}
              value={option}
              control={<Checkbox />}
              label={option}
            />
          ))}
        </FormGroup>
      </FormControl>
      <Button type="submit" variant="contained" fullWidth onClick={onSubmit}>
        Submit
      </Button>
    </Box>
  );
}
