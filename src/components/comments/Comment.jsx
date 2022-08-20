import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Button from "../elements/Button";
import { useSelector, useDispatch } from "react-redux";

function Comment({ comment, post }) {
  //   const isLogin = useSelector((state) => state.user.isLogin);
  const isLogin = true;
  const isMine = comment.isMine;
  const dispatch = useDispatch();

  const [isEdit, setEdit] = useState(false);
  const [updateComment, setUpdateComment] = useState(comment.conetent);
  const isEditHandler = (isEdit) => {
    setEdit(!isEdit);
  };

  const commentId = comment.commentId;

  const onUpdateHandler = () => {};

  const onDeleteHandler = () => {};

  return (
    <>
      <CommentView>
        <CommentHeader>
          <CommentUserProfile>
            {/* <User icon={faUser} /> */}
            <Image src="http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg" />
            <Writer> {comment.username}</Writer>
          </CommentUserProfile>
          <ButtonWrapper>
            {isMine && !isEdit && (
              <CommentButton
                onClick={() => {
                  isEditHandler(isEdit);
                }}
              >
                수정
              </CommentButton>
            )}
            {isMine && (
              <CommentButton onClick={onDeleteHandler}>삭제</CommentButton>
            )}
          </ButtonWrapper>
        </CommentHeader>
        {isEdit ? (
          <>
            <CommentContent>
              <Textarea
                required
                type="text"
                placeholder={"댓글을 입력해주세요. (5-100자)"}
                name="comment"
                value={updateComment}
                onChange={(e) => {
                  setUpdateComment(e.target.value);
                }}
              />
            </CommentContent>
            <ButtonBox>
              <Button
                content={"취소"}
                onClick={() => {
                  isEditHandler(isEdit);
                }}
              />
              <Button content={"댓글 수정"} onClick={onUpdateHandler} />
            </ButtonBox>
            <Hr noshade />
          </>
        ) : (
          <>
            <CommentContent>{comment.contents}</CommentContent>
            <Hr noshade />
          </>
        )}
      </CommentView>
    </>
  );
}

export default Comment;

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

const Image = styled.img`
  width: 50px;
  border-radius: 50px;
  padding: 10px;
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
  border-radius: 5px;
  border: 0;
  resize: none;
  background-color: transparent;
  font-size: medium;
  padding: 10px;
  border-bottom: teal 1px solid;
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
