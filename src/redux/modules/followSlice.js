import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import RES from "../../server/response";

// ${URI.BASE}
const URI = {
  BASE: process.env.REACT_APP_BASE_URI,
};

const config = {
  Authorization: localStorage.getItem("accessToken"),
  RefreshToken: localStorage.getItem("refreshToken"),
};

// 팔로우 리스트 가져오기
export const __getfollowingList = createAsyncThunk(
  "GET_FOLLOW_LIST",
  async (arg, thunkAPI) => {
    try {
      const { data } = await axios({
        method: "get",
        url: `${URI.BASE}/api/follower/${arg.memberId}`,
        headers: {
          "Content-Type": "application/json",
        },
      });
      // const { data } = RES.GET_FOLLOWINGS_SUCCESS;
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

// 팔로워 리스트 가져오기
export const __getfollowerList = createAsyncThunk(
  "GET_FOLLOWER_LIST",
  async (arg, thunkAPI) => {
    try {
      const { data } = await axios({
        method: "get",
        url: `${URI.BASE}/api/following/${arg.memberId}`,
        headers: {
          "Content-Type": "application/json",
        },
      });
      // const { data } = RES.GET_FOLLOWERS_SUCCESS;
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

const initialState = {
  followingList: [],
  followerList: [],
  isLoading: false,
  error: null,
};

export const followSlice = createSlice({
  name: "follow",
  initialState,
  reducers: {},
  extraReducers: {
    // 팔로우 리스트 가져오기 (R)
    [__getfollowingList.pending]: (state) => {
      state.isLoading = true;
    },
    [__getfollowingList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.followingList = action.payload;
    },
    [__getfollowingList.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // 팔로워 리스트 가져오기 (R)
    [__getfollowerList.pending]: (state) => {
      state.isLoading = true;
    },
    [__getfollowerList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.followerList = action.payload;
    },
    [__getfollowerList.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default followSlice.reducer;
