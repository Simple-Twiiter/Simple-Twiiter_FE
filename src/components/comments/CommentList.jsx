import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Comment from "./Comment";
import { useSelector, useDispatch } from "react-redux";
import { __getCommentsList } from "../../redux/modules/commentSlice";
import { useParams } from "react-router-dom";

function CommentList() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const postId = id;
  const commentList = useSelector((state) => state.comment.commentList);
  const pageSize = 5;
  const [pageNum, setPageNum] = useState(0);
  console.log("여기찍힘??")

  useEffect(() => {
    dispatch(__getCommentsList({ postId, pageSize, pageNum }));
  }, []);

  return (
    <>
      <Container>
        {commentList.map((comment) => {
          return (
            <Fragment key={comment.commentId}>
              <Comment comment={comment} postId={postId} />
            </Fragment>
          );
        })}
      </Container>
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
