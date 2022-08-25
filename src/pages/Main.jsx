import React from "react";
import { useSelector } from "react-redux";
import Layout from "../components/layout/Layout";
import TwitList from "../components/main/TwitList";
import Create from "./post/Create";
import Login from "./user/Login";


function Main() {
  const isLogin = useSelector((state) => state.user.isLogin);
  return (
    <Layout>
      {isLogin && <Create />}
      <TwitList />
    </Layout>
  );
}

export default Main;


