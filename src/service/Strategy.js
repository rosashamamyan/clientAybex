import $api from "../http";

export const getStrategies = async () => {
    return await $api.get(`/api/strategy/getStrategies`)
}

export const getStrategy = async (strategyId) => {
    return await $api.get(`/api/strategy/getStrategy/${strategyId}`)
}

export const getStrategyTypes = async () => {
    return await $api.get(`/api/strategy/getStrategyTypes`)
}

export const createStrategy = async (formDataToSend, formData) => {
    return await $api.post(`/api/strategy/createStrategy`, {data:{
        formDataToSend, formData
    }})
}

export const editStrategy = async (formData) => {
    return await $api.post(`/api/strategy/editStrategy`, {...formData})
}

export const deleteStrategy = async (strategyId) => {
    return await $api.post(`/api/strategy/deleteStrategy`, {strategyId})
}