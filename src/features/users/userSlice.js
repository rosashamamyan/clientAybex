import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUser, getAllUsers, getUser, reactivateAcc, updateUser } from "../../service/User";

const initialState = {
  users: [],
  user: {}
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const users = await getAllUsers();
  return users;
});

export const addUser = createAsyncThunk("users/createUser", async (formData) => {
  const user = await createUser(formData);
  return user
})

export const getUserData = createAsyncThunk("users/getUser", async (userId) => {
  const user = await getUser(userId)
  return user
})

export const updateUserData = createAsyncThunk("users/updateUser", async (formData) => {
  const updatedUser = await updateUser(formData)
  return updatedUser
})

export const reactivateUserAccount = createAsyncThunk("users/reactivateAcc", async (data) => {
  const reactivatedUser = await reactivateAcc(data)
  return reactivatedUser
})

const userSlice = createSlice({ 
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload?.data;
    }).addCase(
      addUser.fulfilled, (state, action) => {
        state.users.push(action.payload?.data)
      }
    ).addCase(
      getUserData.fulfilled, (state, action) => {
        state.user = action.payload?.data
      }
    )
  },
});

export  const selectUsers = (state) => {
  return state.users.users;
};

export const selectUser = (state) => {
  return state.users.user
}

export default userSlice.reducer;

