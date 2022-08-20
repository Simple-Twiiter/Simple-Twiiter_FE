import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import RES from "../../server/response";

// ${URI.BASE}
const URI = {
  BASE: process.env.REACT_APP_BASE_URI,
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
    // 댓글 조회
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
  },
});

export default commentSlice.reducer;
