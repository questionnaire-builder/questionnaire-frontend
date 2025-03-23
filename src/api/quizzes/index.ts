import { httpClient } from "..";

const PATH_PREFIX = "/api/quizzes/";

export const GET_ALL_QUIZZES = "GET_ALL_QUIZZES";

export const getAllQuizzes = async () => {
  const { data } = await httpClient.get(`${PATH_PREFIX}`);
  return data;
};
