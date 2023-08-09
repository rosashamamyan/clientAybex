import axios from "axios";
import { API_URL } from "../http";

export const login = async (data) => {
  return await axios.post(`${API_URL}/api/auth/signin`, { data });
};

export const signUp = async (data) => {
  return await axios.post(`${API_URL}/api/auth/signup`, { data });
};
