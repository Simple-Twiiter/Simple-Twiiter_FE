import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RES from "../../server/response";
import axios from "axios";

// ${URI.BASE}
const URI = {
  BASE: process.env.REACT_APP_BASE_URI,
};

const initialState = {
  isLogin: localStorage.getItem("Authorization") ? true : false,
  userInfoCount: {},
};

export const __getSingleUser = createAsyncThunk(
  "post/__getSingleUser",
  async (arg, thunkAPI) => {
    try {
      // const { data } = await axios({
      //   method: "get",
      //   url: `${URI.BASE}/api/count/${arg.memberId}`,
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      const { data } = RES.GET_USER_PROFILE_SUCCESS;
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
    },
    logout: (state, action) => {
      state.isLogin = false;
    },
  },
  extraReducers: {
    [__getSingleUser.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getSingleUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userInfoCount = action.payload;
    },
    [__getSingleUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
