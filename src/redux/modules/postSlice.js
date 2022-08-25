import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import RES from "../../server/response";

const initialState = {
  list: [],
  singlePost: {},
  hasMoreTwits: null,
  isLoading: null,
  //   isLoading: false,
  //   err: null,
};

// ${URI.BASE}
const URI = {
  BASE: process.env.REACT_APP_BASE_URI,
};

const config = {
  Authorization: localStorage.getItem("Authorization"),
  RefreshToken: localStorage.getItem("RefreshToken"),
};

// ${URI.BASE}/api/post?page=${arg.page}&pageSize=${arg.pageSize}
export const __getPost = createAsyncThunk(
  "post/__getPost",
  async (arg, thunkAPI) => {
    try {
      const { data } = await axios({
        method: "get",
        url: `${URI.BASE}/api/post?page=0&pageSize=100`,
        headers: {
          Authorization: localStorage.getItem("Authorization"),
          RefreshToken: localStorage.getItem("RefreshToken"),
          "Content-Type": "application/json",
        },
      });
      console.log(data);
      // const { data } = RES.GET_POSTS_SUCCESS;
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const __getSinglePost = createAsyncThunk(
  "post/__getSinglePost",
  async (arg, thunkAPI) => {
    try {
      const { data } = await axios({
        method: "get",
        url: `${URI.BASE}/api/post/${arg.postId}`,
        headers: {
          Authorization: localStorage.getItem("Authorization"),
          RefreshToken: localStorage.getItem("RefreshToken"),
          "Content-Type": "application/json",
        },
      });
      console.log(data);
      // const { data } = RES.GET_POST_SUCCESS;
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postPost = createAsyncThunk(
  "post/__postPost",
  async (arg, thunkAPI) => {
    try {
      const { data } = await axios({
        method: "post",
        url: `${URI.BASE}/api/post`,
        data: arg,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("Authorization"),
          RefreshToken: localStorage.getItem("RefreshToken"),
        },
      });
      // const { data } = RES.ADD_POST_SUCCESS;
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const __deletePost = createAsyncThunk(
  "post/__deletePost",
  async (arg, thunkAPI) => {
    try {
      await axios({
        method: "delete",
        url: `${URI.BASE}/api/post/${arg}`,
        headers: config,
      });
      // const { data } = RES.DELETE_POST_SUCCESS;
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
      const { data } = axios({
        method: "put",
        url: `${URI.BASE}/api/post/${arg.id}`,
        data: arg.data,
        headers: config,
      });
      // const { data } = RES.UPDATE_POST_SUCCESS;
      return thunkAPI.fulfillWithValue(data.data);
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
      state.hasMoreTwits = action.payload.length === 5;
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
      state.list.push(action.payload);
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
