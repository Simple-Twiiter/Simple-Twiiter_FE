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

// 댓글 리스트 가져오기
export const __getCommentsList = createAsyncThunk(
  "GET_COMMENTS_LIST",
  async (arg, thunkAPI) => {
    try {
      //   const { data } = await axios({
      //     method: "get",
      //     url: `${URI.BASE}/api/comment/${arg.postId}?page=${arg.pageNum}&pageSize=${arg.pageSize}`,
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   });
      const { data } = RES.GET_COMMENT_LIST_SUCCESS;
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

// 댓글 작성
// ${URI.BASE}/api/comment
export const __addComment = createAsyncThunk(
  "ADD_COMMENT",
  async (arg, thunkAPI) => {
    try {
      // 실제 서버랑 연결할 때 꼭 data로 변경
      const { datas } = await axios({
        method: "post",
        url: `${URI.BASE}/commentList`,
        data: {
          contents: arg.comment,
        },
        headers: config,
      });
      const { data } = RES.ADD_COMMENT_SUCCESS;
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  commentList: [],
  comment: {},
  isLoading: false,
  error: null,
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: {
    // 댓글 리스트 조회 (R)
    [__getCommentsList.pending]: (state) => {
      state.isLoading = true;
    },
    [__getCommentsList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.commentList = action.payload;
    },
    [__getCommentsList.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // 댓글 작성 (C)
    [__addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.commentList.push(action.payload);
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default commentSlice.reducer;
