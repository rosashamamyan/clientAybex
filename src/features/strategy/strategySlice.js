import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createStrategy, getStrategies, getStrategyTypes } from "../../service/Strategy";

const initialState = {
    strategies: [],
    strategyTypes: []
};

export const getStrategiesData = createAsyncThunk("strategies/getStrategies", async () => {
    const strategies = await getStrategies()
    return strategies
})

export const getStrategyTypesData = createAsyncThunk("strategy/getStrategyTypes", async () => {
    const strategyTypes = await getStrategyTypes()
    return strategyTypes
})

export const createStrategyData = createAsyncThunk("strategy/createStrategy", async (formData) => {
    const createdStrategy = await createStrategy(formData)
    return createdStrategy
})

const strategySlice = createSlice({
    name: "strategies",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getStrategiesData.fulfilled, (state, action) => {
           state.strategies = action.payload.data
        }).addCase(getStrategyTypesData.fulfilled, (state, action) => {
            state.strategyTypes = action.payload.data
        }).addCase(createStrategyData.fulfilled, (state, action) => {
            state.strategies.push(action.payload.data)
        })
    }
})

export const selectStrategies = (state) => {
    return state.strategy.strategies;
};

export const selectStrategyTypes = (state) => {
    return state.strategy.strategyTypes;
};

export default strategySlice.reducer;