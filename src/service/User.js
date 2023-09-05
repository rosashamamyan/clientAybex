import $api from "../http";

export const createUser = async (data) => {
  return await $api.post(`/api/user/createUser`, { ...data });
};

export const getAllUsers = async () => {
  return await $api.get(`/api/user/getAllUsers`)
}

export const getUser = async (userId) => {
  return await $api.get(`/api/user/getUser/${userId}`)
}

export const updateUser = async (data) => {
  return await $api.post(`/api/user/updateUser`, {...data})
}

export const reactivateAcc = async (data) => {
  return await $api.post(`/api/user/reactivateAcc`, data)
}