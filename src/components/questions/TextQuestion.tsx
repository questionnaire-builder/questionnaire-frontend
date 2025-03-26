import { 
  Box, 
  Button, 
  FormControl, 
  TextField, 
  Typography 
} from '@mui/material';
import { useState } from 'react';

interface ITextQuestion {
  question: string;
  onSubmit: (answer: string | string[]) => void;
}

export function TextQuestion({ 
  question, 
  onSubmit 
}: ITextQuestion) {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!answer.trim()) return;
    onSubmit(answer);
    setAnswer("");
  };

  return (
    <Box width={"100%"}>
      <Typography variant="h6" align="center">
        {question}
      </Typography>
      <FormControl fullWidth component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          sx={{ my: 2 }}
          variant="outlined"
          placeholder="Type your answer..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <Button type="submit" variant="outlined" size="large">
          Submit
        </Button>
      </FormControl>
    </Box>
  );
}
