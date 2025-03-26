import { 
  Box, 
  Button, 
  FormControl, 
  TextField, 
  Typography 
} from '@mui/material';

interface ITextQuestion {
  question: string;
  onSubmit: () => void;
}

export function TextQuestion({ 
  question, 
  onSubmit 
}: ITextQuestion) {
  return (
    <Box width={"100%"}>
      <FormControl fullWidth>
        <Typography variant="h6" align="center">
          {question}
        </Typography>
        <TextField
          fullWidth
          sx={{ my: 2 }}
          variant="outlined"
          placeholder="Type your answer..."
        />
        <Button type="submit" variant="outlined" size="large" onClick={onSubmit}>
          Submit
        </Button>
      </FormControl>
    </Box>
  );
}
