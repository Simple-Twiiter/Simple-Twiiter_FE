import React from "react";
import Layout from "../components/layout/Layout";
import TwitList from "../components/main/TwitList";
import Create from "./post/Create";
import Login from "./user/Login";

function Main() {
  return (
    <Layout>
      <Create />
      <TwitList />
    </Layout>
  );
}

export default Main;
