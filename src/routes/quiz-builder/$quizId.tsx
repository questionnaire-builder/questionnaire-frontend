import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/quiz-builder/$quizId')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/quiz-builder/$quizId"!</div>;
}
