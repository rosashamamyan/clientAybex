import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "../../service/User";

const initialState = {
  users: [],
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const users = await getAllUsers();
  return users;
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.fulfilled]: (state, action) => {
      state.users = action.payload.data;
    },
  },
});

export const selectUsers = (state) => {
  return state.users.users;
};

export default userSlice.reducer;
