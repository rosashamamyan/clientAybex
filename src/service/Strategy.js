import $api from "../http";

export const getStrategies = async () => {
    return await $api.get(`/api/strategy/getStrategies`)
}

export const getStrategyTypes = async () => {
    return await $api.get(`/api/strategy/getStrategyTypes`)
}