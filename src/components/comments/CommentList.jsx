import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Comment from "./Comment";
import { useSelector, useDispatch } from "react-redux";
import { __getCommentsList } from "../../redux/modules/commentSlice";
import { useParams } from "react-router-dom";
import "./CommentList.css"

function CommentList() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const postId = id;
  const commentList = useSelector((state) => state.comment?.commentList);
  // console.log(commentList);
  const pageSize = 5;
  const [pageNum, setPageNum] = useState(0);

  useEffect(() => {
    dispatch(
      __getCommentsList({ id: id, pageSize: pageSize, pageNum: pageNum })
    );
  }, []);

  return (
    <>
      <div className="stContainer">
        {commentList?.map((comment) => {
          return (
            <Fragment key={comment.id}>
              <Comment comment={comment} postId={postId} />
            </Fragment>
          );
        })}
      </div>
    </>
  );
}

export default CommentList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 50px 10px;
`;

const PaginationContainer = styled.div``;
