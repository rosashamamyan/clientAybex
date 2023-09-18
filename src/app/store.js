import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import strategyReducer from "../features/strategy/strategySlice"
import accountSlice from "../features/account/accountSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    strategy: strategyReducer,
    account: accountSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});