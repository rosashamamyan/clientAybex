import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createAccount } from "../../service/Account";

const initialState = {
    accounts: []
};

export const createAccountData = createAsyncThunk(
    "account/createAccount",
    async (data) => {
      const createdAccount = await createAccount(data);
      return createdAccount;
    }
  );

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
  },
});

export const selectAccounts = (state) => {
  return state.strategy.accounts;
};


export default accountSlice.reducer;