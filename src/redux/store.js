import { combineReducers, configureStore } from "@reduxjs/toolkit";
import comment from "./modules/commentSlice";
import post from "./modules/postSlice";
import user from "./modules/userSlice";
import follow from "./modules/followSlice";
import thunk from "redux-thunk";
import logger from "redux-logger";
const middlewares = [thunk];

// 리듀서 통합
const rootReducer = combineReducers({
  comment,
  user,
  post,
  follow,
  devTools: false,
});

// 스토어 연결
const store = configureStore({
  reducer: rootReducer,

  middleware: [...middlewares],
});

export default store;
