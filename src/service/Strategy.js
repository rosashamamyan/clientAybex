import $api from "../http";

export const getStrategies = async () => {
    return await $api.get(`/api/strategy/getStrategies`)
}

export const getStrategyTypes = async () => {
    return await $api.get(`/api/strategy/getStrategyTypes`)
}

export const createStrategy = async (formData) => {
    return await $api.post(`/api/strategy/createStrategy`, {...formData})
}