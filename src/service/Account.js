import $api from "../http";

export const createAccount = async (data) => {
  return await $api.post(`/api/account/createAccount`, { ...data });
};