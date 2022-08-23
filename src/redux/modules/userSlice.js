import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLogin: localStorage.getItem("accessToken") ? true : false,
  isUser: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.isUser = action.data;
    },
    logout: (state, action) => {
      state.isLogin = false;
      state.isUser = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
