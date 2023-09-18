import $api from "../http";

export const createAccount = async (data) => {
  return await $api.post(`/api/account/createAccount`, { ...data });
};

export const fetchAccountUploadBatch = async () => {
  return await $api.get(`/api/account/fetchAccountUploadBatch`)
}