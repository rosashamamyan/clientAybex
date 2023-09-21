import $api from "../http";

export const createAccount = async (data) => {
  return await $api.post(`/api/account/createAccount`, { ...data });
};

export const fetchAccountUploadBatch = async () => {
  return await $api.get(`/api/account/fetchAccountUploadBatch`)
}

export const fetchLastAccountUploadBatch = async () => {
  return await $api.get(`/api/account/fetchLastAccountUploadBatch`)
}

export const deleteUploadBatch = async (uploadBatchId) => {
  return await $api.post(`/api/account/deleteUploadBatch`, {uploadBatchId})
}