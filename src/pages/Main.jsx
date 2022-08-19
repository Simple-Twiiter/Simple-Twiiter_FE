import React from "react";
import TwitList from "../components/main/TwitList";
import Create from "./post/Create";
import Login from "./user/Login";

function Main() {
  return (
    <div>
      <Create />
      <TwitList />
    </div>
  );
}

export default Main;
