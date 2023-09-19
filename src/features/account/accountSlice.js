import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createAccount, fetchAccountUploadBatch } from "../../service/Account";

const initialState = {
    accounts: [],
    accountUploadBatch: []
};

export const createAccountData = createAsyncThunk(
    "account/createAccount",
    async (data) => {
      return await createAccount(data);
    }
);

export const fetchAccountUploadBatchData = createAsyncThunk(
  "account/fetchAccountUploadBatch",
  async () => {
    return await fetchAccountUploadBatch()
  }
)

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAccountUploadBatchData.fulfilled, (state, action) => {
      state.accountUploadBatch = action.payload.data
    })
  },
});

export const selectAccounts = (state) => {
  return state.account.accounts;
};

export const selectUploadBatch = (state) => {
  return state.account.accountUploadBatch;
};

export default accountSlice.reducer;