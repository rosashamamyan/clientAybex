import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUser, getAllUsers } from "../../service/User";

const initialState = {
  users: [],
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const users = await getAllUsers();
  return users;
});

export const addUser = createAsyncThunk("users/createUser", async (formData) => {
  const user = await createUser(formData);
  return user
})

const userSlice = createSlice({ 
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload.data;
    }).addCase(
      addUser.fulfilled, (state, action) => {
        state.users.push(action.payload.data)
      }
    )
  },
});

export  const selectUsers = (state) => {
  return state.users.users;
};

export default userSlice.reducer;

