import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/quiz-run/$quizId')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/quiz-run/$quizId"!</div>;
}
