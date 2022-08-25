import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __deletePost } from "../../redux/modules/postSlice";
import FollowButton from "../elements/FollowButton";
import LikeBtn from "../elements/LikeButton";
import "./Twit.css"

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
      <div className="twitBox" onClick={() => navigate(`/detail/${twit.id}`)}>
        <div className="stTwitTitle">
          {isLogin && isMine && (
            <div className="stTitleButton"
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
              ✖
            </div>
          )}
        </div>

        <div className="stUserBox">
          <div className="userImgBox">
            <img className="userImage" src={twit.member.userImg}></img>
          </div>
          <h3>{twit.member.username}</h3>
        </div>

        <div>{twit.title}</div>
        <div>{twit.content}</div>
        <img className="twitImg" src={twit.imgUrl} />

        <h3>{twit.createdAt}</h3>
      </div>
      <div className="buttonsWrapper">
        <LikeBtn
          isLogin={isLogin}
          postId={twit.id}
          isLike={twit.isLike}
          heart={twit.heartCount}
        />

        {/* {!isMine && (
          <FollowButton
            isLogin={isLogin}
            postId={twit.id}
            isFollow={twit.isFollow}
          />
        )} */}
      </div>
    </>
  );
}

const TwitBox = styled.div`
  width: 100%;
  /* border-radius: 10px; */
  border: 1px solid #eee;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  border-collapse: collapse;

  cursor: pointer;
  &:hover {
    background-color: rgba(210, 210, 210, 0.08);
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
      rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    color: black;
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

const StTwitTitle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
`;

const StTitleButton = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 50%;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: white;
  &:hover {
    background-color: rgba(210, 210, 210, 0.5);
    color: black;
  }
`;

const StUserBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
`;

export default Twit;
