import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

import { type User } from "../../models/User";
import axios from "axios";

interface AuthenticationSliceState {
  loggedInUser: User | undefined;
  loading: boolean;
  error: boolean;
  registerSuccess: boolean;
}

const initialState: AuthenticationSliceState = {
  loggedInUser: undefined,
  loading: false,
  error: false,
  registerSuccess: false,
};

export const AuthenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {},
});

export const {} = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;
