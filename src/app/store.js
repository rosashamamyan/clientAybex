import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});