import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createQuiz, GET_ALL_QUIZZES } from "../../api/quiz";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";

interface CreateQuizModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CreateQuizModal({ open, onClose }: CreateQuizModalProps) {
  const queryClient = useQueryClient();
  const [quizName, setQuizName] = useState("");
  const [quizDescription, setQuizDescription] = useState("");

  useEffect(() => {
    if (open) {
      setQuizName("");
      setQuizDescription("");
    }
  }, [open]);

  const createQuizMutation = useMutation({
    mutationFn: createQuiz,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_ALL_QUIZZES] });
      setQuizName("");
      setQuizDescription("");
      onClose();
    },
  });

  const handleSubmit = () => {
    createQuizMutation.mutate({
      name: quizName,
      description: quizDescription,
    });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create a new Quiz</DialogTitle>
      <DialogContent>
        <TextField
          label="Quiz Name"
          fullWidth
          variant="outlined"
          margin="normal"
          value={quizName}
          onChange={(e) => setQuizName(e.target.value)}
        />
        <TextField
          label="Quiz Description"
          fullWidth
          variant="outlined"
          margin="normal"
          multiline
          rows={3}
          value={quizDescription}
          onChange={(e) => setQuizDescription(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary" disabled={createQuizMutation.isPending}>
          {createQuizMutation.isPending ? "Creating..." : "Create"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
