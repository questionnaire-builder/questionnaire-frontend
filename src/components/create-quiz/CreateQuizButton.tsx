import { useState } from "react";
import { Button } from "@mui/material";
import CreateQuizModal from "./CreateQuizModal";

export default function CreateQuizButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="outlined" size="large" onClick={() => setOpen(true)}>
        Create Quiz
      </Button>
      <CreateQuizModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
