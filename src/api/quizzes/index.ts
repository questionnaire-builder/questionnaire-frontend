import { httpClient } from "..";

const PATH_PREFIX = "/api/quizzes/";

export const GET_ALL_QUIZZES = "GET_ALL_QUIZZES";

export const getAllQuizzes = async () => {
  const { data } = await httpClient.get(`${PATH_PREFIX}`);
  return data;
};

export const DELETE_QUIZ_BY_ID = "DELETE_QUIZ_BY_ID";

export const deleteQuizById = async (quizId: string) => {
  const { data } = await httpClient.delete(`${PATH_PREFIX}/${quizId}`);
  return data;
};
