import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createStrategy, getStrategies, getStrategy, getStrategyTypes, editStrategy } from "../../service/Strategy";

const initialState = {
    strategies: [],
    strategyTypes: [],
    strategy: {}
};

export const getStrategiesData = createAsyncThunk("strategies/getStrategies", async () => {
    const strategies = await getStrategies()
    return strategies
})

export const getStrategyData = createAsyncThunk("strategies/getStrategy", async (strategyId) => {
    const strategy = await getStrategy(strategyId)
    return strategy
})

export const getStrategyTypesData = createAsyncThunk("strategy/getStrategyTypes", async () => {
    const strategyTypes = await getStrategyTypes()
    return strategyTypes
})

export const createStrategyData = createAsyncThunk("strategy/createStrategy", async (formData) => {
    const createdStrategy = await createStrategy(formData)
    return createdStrategy
})

export const editStrategyData = createAsyncThunk("strategy/editStrategy", async (formData) => {
    const editedStrategy = await editStrategy(formData)
    return editedStrategy
})

const strategySlice = createSlice({
    name: "strategies",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getStrategiesData.fulfilled, (state, action) => {
           state.strategies = action.payload?.data
        }).addCase(getStrategyTypesData.fulfilled, (state, action) => {
            state.strategyTypes = action.payload?.data
        }).addCase(createStrategyData.fulfilled, (state, action) => {
            state.strategies.push(action.payload?.data)
        }).addCase(getStrategyData.fulfilled, (state, action) => {
            state.strategy = action.payload?.data
        })
    }
})

export const selectStrategies = (state) => {
    return state.strategy.strategies;
};

export const selectStrategyTypes = (state) => {
    return state.strategy.strategyTypes;
};

export const selectStrategy = (state) => {
    return state.strategy.strategy;
};

export default strategySlice.reducer;