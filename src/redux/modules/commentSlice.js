import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import RES from "../../server/response";

// ${URI.BASE}
const URI = {
  BASE: process.env.REACT_APP_BASE_URI,
};

const config = {
  Authorization: localStorage.getItem("Authorization"),
  RefreshToken: localStorage.getItem("RefreshToken"),
};

// 댓글 리스트 가져오기
export const __getCommentsList = createAsyncThunk(
  "GET_COMMENTS_LIST",
  async (arg, thunkAPI) => {
    try {
      const { data } = await axios({
        method: "get",
        url: `${URI.BASE}/api/comment/${arg.id}`,
        headers: {
          Authorization: localStorage.getItem("Authorization"),
          RefreshToken: localStorage.getItem("RefreshToken"),
          "Content-Type": "application/json",
        },
      });
      console.log(data);
      // const { data } = RES.GET_COMMENT_LIST_SUCCESS;
      return thunkAPI.fulfillWithValue(data.data);
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
    console.log(arg);
    try {
      const { data } = await axios({
        method: "post",
        url: `${URI.BASE}/api/comment/${arg.postId}`,
        data: {
          content: arg.comment,
        },
        headers: config,
      });
      // const { data } = RES.ADD_COMMENT_SUCCESS;
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 댓글 수정
// /api/comment/{commentId}
export const __updateComment = createAsyncThunk(
  "UPDATE_COMMENT",
  async (arg, thunkAPI) => {
    try {
      // /api/comment/{commentId}/{postId}
      const { data } = await axios({
        method: "put",
        url: `${URI.BASE}/api/comment/${arg.commentId}/${arg.postId}`,
        data: {
          content: arg.comment,
        },
        headers: config,
      });
      console.log(data.data);
      // const { data } = RES.UPDATE_COMMENT_SUCCESS2;
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

//댓글 삭제
// /api/comment/{commentId}
export const __deleteComment = createAsyncThunk(
  "DELETE_COMMENT",
  async (arg, thunkAPI) => {
    try {
      await axios({
        method: "delete",
        url: `${URI.BASE}/api/comment/${arg}`,
        headers: config,
      });
      return thunkAPI.fulfillWithValue(arg);
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
    // 댓글 수정 (U)
    [__updateComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      const target = state.commentList.findIndex(
        (comment) => comment.id === action.payload.id
      );
      state.commentList.splice(target, 1, action.payload);
    },
    [__updateComment.rejected]: (state) => {
      state.isLoading = true;
    },
    // 댓글 삭제 (D)
    [__deleteComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      const target = state.commentList.findIndex(
        (comment) => comment.id === action.payload
      );
      state.commentList.splice(target, 1);
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default commentSlice.reducer;
