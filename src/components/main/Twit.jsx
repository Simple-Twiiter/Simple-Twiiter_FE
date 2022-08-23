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
      <TwitBox onClick={() => navigate(`/detail/${twit.id}`)}>
          <StTwitTitle>
            <div>
              {twit.username}
            </div>
            <div>
              <StTitleButton
          onClick={(event) => {
            event.stopPropagation();
            const result = window.confirm("진짜로 삭제하시겠습니까?");
            if (result) {
              return deleteHandler(twit.id);
            } else {
              return;
            }
          }}
          >Delete</StTitleButton>
            </div>
          </StTwitTitle>

          <div>
            <h1>{twit.title}</h1>
          </div>

          <div>
            <h3>{twit.contents}</h3>
          </div>

          <div>이미지{twit.imgUrl}</div>
          
      </TwitBox>
  );
}

export default Twit;

const TwitBox = styled.div`
  width: 100%;
  height: 250px;
  /* border-radius: 10px; */
  border: 1px solid #eee;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: flex-start;
  
  cursor: pointer;
  &:hover{  
    background-color: rgba(210, 210, 210, 0.08);
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    color : black;
  }
  
`;



const StTwitTitle = styled.div`
  display:flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`


const StTitleButton = styled.button`
  width: 50px;
  height: 30px;
  border: 1px solid #eee;
  border-radius: 10px;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 5px; */
  cursor: pointer;
  background-color : white;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  &:hover{  
    background-color: #00ACEE;
    /* box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset; */
    color : black;
  }
`;