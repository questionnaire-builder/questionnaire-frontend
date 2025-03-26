import axios from "axios";
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

export const CREATE_QUIZE = "CREATE_QUIZE";

export const createQuiz = async (payload: { name: string; description: string }) => {
  try {
    const { data } = await httpClient.post(`${PATH_PREFIX}`, payload);
    return data;
  } catch (error) {
    if (!axios.isAxiosError(error)) throw error;
    throw error.response?.data;
  }
};

export const GET_QUIZ_BY_ID = "GET_QUIZ_BY_ID";

export const getQuizById = async (quizId: string) => {
  const { data } = await httpClient.get(`${PATH_PREFIX}/${quizId}`);
  return data;
};
