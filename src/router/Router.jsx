import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Detail from "../pages/post/Detail";
import Update from "../pages/post/Update";
import Profile from "../pages/user/Profile";
import SignUp from "../pages/user/SignUp";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/main" element={<Main />}></Route>
      <Route path="/detail/:id" element={<Detail />}></Route>
      <Route path="/update/:id" element={<Update />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
    </Routes>
  );
}

export default Router;