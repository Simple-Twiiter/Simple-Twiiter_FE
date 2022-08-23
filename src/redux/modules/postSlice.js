import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import RES from "../../server/response";

const initialState = {
  list: [],
  singlePost: {},
  //   isLoading: false,
  //   err: null,
};

// ${URI.BASE}
const URI = {
  BASE: process.env.REACT_APP_BASE_URI,
};

const config = {
  Authorization: localStorage.getItem("accessToken"),
  RefreshToken: localStorage.getItem("refreshToken"),
};

// 서버에 연결하기 좋게 URL은 나중에 바꾸기
export const __getPost = createAsyncThunk(
  "post/__getPost",
  async (arg, thunkAPI) => {
    try {
      // const { data } = await axios({
      //   method: "get",
      //   url: `${URI.BASE}/api/post?page=${arg.page}&pageSize=${arg.pageSize}`,
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      const { data } = RES.GET_POSTS_SUCCESS;

      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const __getSinglePost = createAsyncThunk(
  "post/__getSinglePost",
  async (arg, thunkAPI) => {
    try {
      // const { data } = await axios({
      //   method: "get",
      //   url: `${URI.BASE}/api/post/${arg.postId}`,
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      const { data } = RES.GET_POST_SUCCESS;
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postPost = createAsyncThunk(
  "post/__postPost",
  async (arg, thunkAPI) => {
    try {
      // const { data } = await axios({
      //   method: "post",
      //   url: `${URI.BASE}/api/post`,
      //   data: arg.fd,
      //   headers: config,
      // });
      const { data } = RES.ADD_POST_SUCCESS;
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const __deletePost = createAsyncThunk(
  "post/__deletePost",
  async (arg, thunkAPI) => {
    try {
      //   await axios({
      //     method: "delete",
      //     url: `${URI.BASE}/api/post/${arg}`,
      //     headers: config,
      //   });
      const { data } = RES.DELETE_POST_SUCCESS;
      return thunkAPI.fulfillWithValue(arg);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const __updatePost = createAsyncThunk(
  "post/__updatePost",
  async (arg, thunkAPI) => {
    try {
      //   const { data } = axios({
      //     method: "put",
      //     url: `${URI.BASE}/api/post/${arg.id}`,
      //     data: {
      //       contents: arg.data,
      //     },
      //     headers: config,
      //   });
      const { data } = RES.UPDATE_POST_SUCCESS;
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {},
  extraReducers: {
    // get
    [__getPost.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
    },
    [__getPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },

    // post
    [__postPost.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__postPost.fulfilled]: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    [__postPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },

    // deletePost
    [__deletePost.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__deletePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      const target = state.list.findIndex((post) => post.id === action.payload);
      state.list.splice(target, 1);
    },
    [__deletePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },
    [__updatePost.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__updatePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.singlePost = action.payload;
    },
    [__updatePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },
    [__getSinglePost.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getSinglePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.singlePost = action.payload;
    },
    [__getSinglePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
