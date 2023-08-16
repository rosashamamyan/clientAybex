import axios from "axios";
import $api, { API_URL } from "../http";

export const createUser = async (data) => {
  return await $api.post(`/api/user/createUser`, { ...data });
};

export const getAllUsers = async () => {
  return await $api.get(`/api/user/getAllUsers`)
}
