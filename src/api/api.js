import axios from "axios";
import { API_TOKEN } from "./APITOKEN";

const instance = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: { Authorization: `bearer ${API_TOKEN}` },
});

export const getVacancies = async () => {
  const vacancies = await instance.get("/vacancies");
  return vacancies.data;
};

export const getCandidates = async () => {
  const candidates = await instance.get("/candidates");
  return candidates.data;
};
