import React from "react";
import AddForm from "../../components/comments/AddForm";
import CommentList from "../../components/comments/CommentList";
import DetailInfo from "../../components/post/DetailInfo";

function Detail() {
  return (
    <div>
      <DetailInfo />
      <AddForm />
      <CommentList />
    </div>
  );
}

export default Detail;
