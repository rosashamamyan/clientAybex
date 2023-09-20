import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createAccount, fetchAccountUploadBatch, fetchLastAccountUploadBatch } from "../../service/Account";

const initialState = {
    accounts: [],
    accountUploadBatch: [],
    lastUploadBatch: {}
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

export const fetchLastAccountUploadBatchData = createAsyncThunk(
  "account/fetchLastAccountUploadBatch",
  async () => {
    return await fetchLastAccountUploadBatch()
  }
)

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAccountUploadBatchData.fulfilled, (state, action) => {
      state.accountUploadBatch = action.payload.data
    });
    builder.addCase(fetchLastAccountUploadBatchData.fulfilled, (state, action) => {
      state.lastUploadBatch = action.payload.data[0]
    })
  },
});

export const selectAccounts = (state) => {
  return state.account.accounts;
};

export const selectUploadBatch = (state) => {
  return state.account.accountUploadBatch;
};

export const selectLastUploadBatch = (state) => {
  return state.account.lastUploadBatch;
}

export default accountSlice.reducer;