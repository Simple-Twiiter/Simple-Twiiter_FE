import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  list: [],
  singlePost: {},
//   isLoading: false,
//   err: null,
};

export const __getPost = createAsyncThunk(
    "post/__getPost",
    async (extr, thunkAPI) => {
      try {
        const { data } = await axios.get("http://localhost:5002/data");
        
        // console.log(data);
        // return thunkAPI.fulfillWithValue(data.data);
        return thunkAPI.fulfillWithValue(data);
      } catch (e) {
        return thunkAPI.rejectWithValue(e.code);
      }
    }
  );

export const __getSinglePost = createAsyncThunk(
  "post/__getSinglePost",
  async (args, thunkAPI) => {
    try {
      // //console.log("args:", args);
      // const targetId = args.id;
      
      const response = await axios.get(`http://localhost:5002/data/${args}`);
      // console.log(response)
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postPost = createAsyncThunk(
  "post/__postPost",
  async (arg, thunkAPI) => {
    try {
        
      const { data } = await axios.post("http://localhost:5002/data", arg);
    //  console.log(response)
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
      console.log(arg)
      await axios.delete(`http://localhost:5002/data/${arg}`);
      // console.log(response)
      return thunkAPI.fulfillWithValue(arg);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// export const __deleteSinglePost = createAsyncThunk(
//   "post/__deleteSinglePost",
//   async (arg, thunkAPI) => {
//     try {
//       console.log(arg)
//       await axios.delete(`http://localhost:3001/data/${arg}`);
//       // console.log(response)
//       return thunkAPI.fulfillWithValue(arg);
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e);
//     }
//   }
// );

export const __updatePost = createAsyncThunk(
  "post/__updatePost",
  async (arg, thunkAPI) => {
    try {
      const id = arg.id;
      console.log(arg)
      // const { title, contents } = { ...arg };
      const response = await axios.put(`http://localhost:5002/data/${id}`,{
          title : arg.title,
          contents : arg.contents,
        });
        console.log(response)
      return thunkAPI.fulfillWithValue(response.data);
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
        // state.list = [{ ...state.list, ...action.payload }];
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
        const target = state.list.findIndex(
        (post) => post.id === action.payload
        );
        state.list.splice(target, 1);
      },
      [__deletePost.rejected]: (state, action) => {
        state.isLoading = false;
        state.err = action.payload;
      },


      // // __deleteSinglePost
      // [__deleteSinglePost.pending]: (state, action) => {
      //   state.isLoading = true;
      // },
      // [__deleteSinglePost.fulfilled]: (state, action) => {
      //   state.isLoading = false;
      //   const target = state.singlePost.findIndex(
      //     (post) => post.id === action.payload
      //     );
      //     state.singlePost.splice(target, 1);
      // },
      // [__deleteSinglePost.rejected]: (state, action) => {
      //   state.isLoading = false;
      //   state.err = action.payload;
      // },

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

    // 한개만 get
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