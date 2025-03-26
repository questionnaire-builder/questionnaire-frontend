import axios from "axios";
import { httpClient } from "..";
import { IQuestion } from "../../interfaces/question.interface";

const PATH_PREFIX = "/api/questions";

export const CREATE_QUESTION = "CREATE_QUESTION";

export const createQuestion = async (payload: IQuestion) => {
  try {
    const { data } = await httpClient.post(`${PATH_PREFIX}`, payload);
    return data;
  } catch (error) {
    if (!axios.isAxiosError(error)) throw error;
    throw error.response?.data;
  }
};

export const GET_QUESTIONS_BY_QUIZ_ID = "GET_QUESTIONS_BY_QUIZ_ID";

export const getQuestionsByQuizId = async (quizId: string) => {
  const { data } = await httpClient.get(`${PATH_PREFIX}/${quizId}`);
  return data;
};
