import $api from "../http";

export const getStrategies = async () => {
  return await $api.get(`/api/strategy/getStrategies`);
};

export const getStrategy = async (strategyId) => {
  return await $api.get(`/api/strategy/getStrategy/${strategyId}`);
};

export const getStrategyTypes = async () => {
  return await $api.get(`/api/strategy/getStrategyTypes`);
};

export const createStrategy = async (data) => {
  return await $api.post(`/api/strategy/createStrategy`,data);
};

export const editStrategy = async (data) => {
  return await $api.post(`/api/strategy/editStrategy`, data);
};

export const deleteStrategy = async (strategyId) => {
  return await $api.post(`/api/strategy/deleteStrategy`, { strategyId });
};
