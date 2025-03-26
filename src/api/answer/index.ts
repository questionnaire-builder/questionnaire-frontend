import axios from "axios";
import { httpClient } from "..";
import { IAnswer } from "../../interfaces/answer.interface";

const PATH_PREFIX = "/api/answers";

export const CREATE_ANSWER = "CREATE_ANSWER";

export const createAnswer = async (payload: IAnswer) => {
  try {
    const { data } = await httpClient.post(`${PATH_PREFIX}`, payload);
    return data;
  } catch (error) {
    if (!axios.isAxiosError(error)) throw error;
    throw error.response?.data;
  }
};
