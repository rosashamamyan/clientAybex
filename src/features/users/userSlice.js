import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllUsers } from '../../service/User'

const initialState = {
  users: []
}

const fetchUsers = createAsyncThunk(
    "",
    async () => {
        const users = await getAllUsers()
        return users
    }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
        state.users.push(action.payload);
    })
  }
})
export const {} = userSlice.actions

export default userSlice.reducer