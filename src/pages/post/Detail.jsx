import React from "react";
import AddForm from "../../components/comments/AddForm";
import CommentList from "../../components/comments/CommentList";
import Layout from "../../components/layout/Layout";
import DetailInfo from "../../components/post/DetailInfo";
import { useSelector } from "react-redux";

function Detail() {
  const isLogin = useSelector((state) => state.user.isLogin);
  return (
    <div>
      <Layout>
        <DetailInfo />
        {isLogin && <AddForm />}
        <CommentList />
      </Layout>
    </div>
  );
}

export default Detail;
