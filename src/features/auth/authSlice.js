import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { logout } from "../../service/Auth";

const initialState = {};

export const userLogout = createAsyncThunk(
  "auth/logout",
  async () => {
    const log = await logout();
    return log;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
  },
});

export default authSlice.reducer;