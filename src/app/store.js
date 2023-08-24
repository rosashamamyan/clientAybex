import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import strategyReducer from "../features/strategy/strategySlice"

export const store = configureStore({
  reducer: {
    users: userReducer,
    strategy: strategyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});