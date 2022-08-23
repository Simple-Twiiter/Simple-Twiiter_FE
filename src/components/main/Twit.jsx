import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __deletePost } from "../../redux/modules/postSlice";
import FollowButton from "../elements/FollowButton";
import LikeBtn from "../elements/LikeButton";

function Twit({ twit }) {
  const isLogin = useSelector((state) => state.user.isLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMine = twit.isMine;

  const deleteHandler = () => {
    dispatch(__deletePost(twit.id));
  };

  return (
    <>
      <TwitBox onClick={() => navigate(`/detail/${twit.id}`)}>
        <UserImgBox>
          <UserImage src={twit.member.userImg}></UserImage>
        </UserImgBox>
        <h3>{twit.member.username}</h3>
        <div>{twit.title}</div>
        <div>{twit.content}</div>
        <Img src={twit.imgUrl} />
        {isLogin && isMine && (
          <button
            onClick={(event) => {
              event.stopPropagation();
              const result = window.confirm("진짜로 삭제하시겠습니까?");
              if (result) {
                return deleteHandler(twit.id);
              } else {
                return;
              }
            }}
          >
            삭제 버튼
          </button>
        )}
        <h3>{twit.createdAt}</h3>
      </TwitBox>
      <ButtonsWrapper>
        <LikeBtn isLogin={isLogin} postId={twit.id} isLike={twit.isLike} />
        {!isMine && (
          <FollowButton
            isLogin={isLogin}
            postId={twit.id}
            isFollow={twit.isFollow}
          />
        )}
      </ButtonsWrapper>
    </>
  );
}

export default Twit;

const TwitBox = styled.div`
  width: 100%;
  border-radius: 10px;
  border: 2px solid #eee;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(252, 237, 239, 0.3);
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    color: #ee0000;
  }
`;

const Img = styled.img`
  width: 90%;
  margin: 20px 10px;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #9e9999;
  margin-bottom: 30px;
  padding: 10px;
`;

const UserImgBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 70%;
  overflow: hidden;
`;

const UserImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
