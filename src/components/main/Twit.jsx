import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { __deletePost } from "../../redux/modules/postSlice"



function Twit({ twit }) {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const twitsGet = useSelector((state) => state.post.list);

  // console.log(twitsGet)
  // console.log(twit.id)

  const deleteHandler = () => {
    dispatch(__deletePost(twit.id))
  }

  // useEffect(() => {
  //   dispatch(__deletePost(twit.id))
  // },[dispatch])

  return (
    <div>
      <TwitBox onClick={() => navigate(`/detail/${twit.id}`)}>
        <div>
          <div>{twit.username}</div>
          <div>{twit.title}</div>
          <div>{twit.contents}</div>
          <div>{twit.imgUrl}</div>
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
          >삭제 버튼</button>
        </div>
      </TwitBox>
    </div>
  );
}

export default Twit;

const TwitBox = styled.div`
  width: 450px;
  height: 150px;
  border-radius: 10px;
  border: 2px solid #eee;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  cursor: pointer;
  &:hover{  
    background-color: rgba(252, 237, 239, 0.3);
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    color : #ee0000
  }
  
`;
