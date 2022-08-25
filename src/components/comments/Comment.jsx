import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Button from "../elements/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  __deleteComment,
  __updateComment,
} from "../../redux/modules/commentSlice";
import { useParams } from "react-router-dom";
import "./Comment.css"

function Comment({ comment, post }) {
  console.log(comment);
  const { id } = useParams();
  const isLogin = useSelector((state) => state.user.isLogin);
  const dispatch = useDispatch();
  // const isMine = comment.isMine;
  const isMine = true;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const [isEdit, setEdit] = useState(false);

  const isEditHandler = () => {
    setEdit((prev) => !prev);
  };

  const commentId = comment.id;

  const onUpdateHandler = (formData) => {
    dispatch(
      __updateComment({
        commentId: commentId,
        comment: formData.comment,
        postId: id,
      })
    );
    setEdit(false);
  };

  const onDeleteHandler = () => {
    const result = window.confirm("댓글을 삭제하겠습니까?");
    if (result) {
      dispatch(__deleteComment(commentId));
    } else {
      return;
    }
  };

  const username2 = localStorage.getItem("username")
  return (
    <>
      <div className="stCommentView">
        <div className="stCommentHeader">
          <div className="stCommentUserProfile">
            {/* <User icon={faUser} /> */}
            <div className="stCommentImgBox">
              <img className="stCommentImage" src={comment.member?.userImg} />
            </div>
            <div className="stWriter"> {comment.member.username}</div>
          </div>
          <div className="stButtonWrapper">
            {isLogin && (comment?.member?.username === username2) &&  !isEdit && (
              <button className="stCommentButton" onClick={isEditHandler}>수정</button>
            )}
            {isLogin && (comment?.member?.username === username2) && (
              <button className="stCommentButton"
                onClick={() => {
                  onDeleteHandler();
                }}
              >
                삭제
              </button>
            )}
          </div>
        </div>
        {isEdit ? (
          <>
            <Form onSubmit={handleSubmit(onUpdateHandler)}>
              <div className="stCommentContent">
                <input className="stTextarea"
                  required
                  type="text"
                  placeholder={"댓글을 입력해주세요. (5-100자)"}
                  name="comment"
                  aria-invalid={errors.comment ? "true" : "false"}
                  {...register("comment", {
                    required: "댓글은 필수 입력사항입니다.",
                  })}
                ></input>
              </div>
              <div className="stButtonBox">
                <button className="stCommentButton" onClick={isEditHandler} >취소</button>
                <button className="stCommentButton" type="submit">댓글 수정</button>
              </div>
            </Form>
            <hr noshade />
          </>
        ) : (
          <>
            <div className="stCommentContent">{comment.content}</div>
            {comment.createdAt}
            <hr noshade />
          </>
        )}
      </div>
    </>
  );
}

export default Comment;

const Form = styled.form``;

const CommentView = styled.div`
  width: 40%;
  height: 200px;
  display: flex;
  flex-direction: column;
`;

const CommentHeader = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  align-items: center;
`;

const CommentUserProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: -20px;
`;

const CommentButton = styled.button`
  font-size: 13px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.MainColor}; ;
`;

const Writer = styled.p`
  font-size: 15px;
  color: #a0a0a0;
`;

const User = styled(FontAwesomeIcon)`
  color: #dbdbdf;
  font-size: 20px;
  background-color: #747477;
  border: 1px solid #747477;
  border-radius: 50px;
  padding: 10px;
`;

const ImgBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 70%;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CommentContent = styled.div`
  display: flex;
  margin: 20px 0px 40px 0px;
  height: 20%;
`;

const Hr = styled.hr`
  width: 105%;
  border: none;
  height: 1px;
  background-color: #f1efef;
  size: 0;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 60px;
  border: 0;
  resize: none;
  background-color: transparent;
  font-size: small;
  padding: 10px;
  border-bottom: #d9d8d8 1px solid;
  &:focus {
    outline: none;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  align-items: flex-start;
  margin-right: -20px;
`;
