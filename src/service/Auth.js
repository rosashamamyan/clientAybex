import axios from "axios";
import $api, { API_URL } from "../http";

export const login = async (data) => {
  return await $api.post(`/api/auth/signin`, { ...data });
};

export const signUp = async (data) => {
  return await $api.post(`/api/auth/signup`, { ...data });
};

export const refresh = async () => {
  return await axios.post(`${API_URL}/api/auth/refresh`);
};
