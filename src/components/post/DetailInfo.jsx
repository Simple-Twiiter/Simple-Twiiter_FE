import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  __getSinglePost,
  __deletePost,
  __updatePost,
} from "../../redux/modules/postSlice";

function DetailInfo() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const param = parseInt(params.id);
  const twitDetail = useSelector((state) => state.post.singlePost);

  const [isShow, setIsShow] = useState(false);

  const openbox = () => {
    console.log("눌림");
    setIsShow((prev) => !prev);
  };

  const [isEdit, setIsEdit] = useState(false);
  const [newTwit, setNewTwit] = useState({
    title: "",
    contents: "",
  });

  useEffect(() => {
    dispatch(__getSinglePost(param));
  }, [dispatch]);

  const deleteHandler = () => {
    dispatch(__deletePost(param));
    navigate("/");
  };

  const onCancelButtonHandler = () => {
    setIsEdit(false);
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setNewTwit({
      ...newTwit,
      [name]: value,
    });
  };

  const onEditHandler = () => {
    if (isEdit) {
      dispatch(
        __updatePost({
          id: param,
          ...newTwit,
        })
      );
    }
    setIsEdit(!isEdit);
    setNewTwit({
      title: "",
      contents: "",
    });
    setIsShow();
  };

  return (
    <div>
      {isEdit === false ? (
        //false 일때
        <div>
          <StDetailInfo>
            <Stkim>
              <StkimProp onClick={openbox}>...</StkimProp>
            </Stkim>

            {!isShow ? null : (
              <StUpdateBox>
                <button onClick={onEditHandler}>수정</button>
                <button
                  onClick={(event) => {
                    event.stopPropagation();
                    const result = window.confirm("게시글을 삭제할래?");
                    if (result) {
                      return deleteHandler(param);
                    } else {
                      return;
                    }
                  }}
                >
                  삭제
                </button>
              </StUpdateBox>
            )}

            <div>{twitDetail.title}</div>
            <div>{twitDetail.contents}</div>
            <div>{twitDetail.imgUrl}</div>
            <div>{twitDetail.createdAt}</div>
          </StDetailInfo>
        </div>
      ) : (
        //true 일때
        <div>
          <StDetailInfo>
            <div>
              <Input
                type="text"
                name="title"
                value={newTwit.title}
                onChange={onChangeHandler}
                placeholder="여기다가는 제목"
              />
              <Input
                type="text"
                name="contents"
                value={newTwit.contents}
                onChange={onChangeHandler}
                placeholder="여기다가는 내용"
              />
            </div>

            {/* <div>{twitDetail.createdAt}</div> */}

            <div>
              <button onClick={onEditHandler}>저장하기</button>
              <br />
              <button onClick={onCancelButtonHandler}>취소하기</button>
            </div>
          </StDetailInfo>
        </div>
      )}
    </div>
  );
}

export default DetailInfo;

const StDetailInfo = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  border: 2px solid #eee;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  .btnBox {
    width: 150px;
    height: 150px;
    border: 1px solid;
  }
`;

const Input = styled.input`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-variant: tabular-nums;
  list-style: none;
  font-feature-settings: "tnum", "tnum";
  position: relative;
  display: inline-block;
  width: 100%;
  height: 70px;
  min-width: 0;
  padding: 4px 11px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  line-height: 1.5715;
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: all 0.3s;
  &:hover {
    border-color: #40a9ff;
    border-right-width: 1px;
  }
  &:focus {
    outline: none;
  }
`;

const Stkim = styled.div`
  width: 100%;
  height: 30px;
  /* border: 1px solid #d9d9d9; */
  display: flex;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
`;
const StkimProp = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid #d9d9d9;
  &:hover {
    border-color: #40a9ff;
    border-right-width: 1px;
  }
  &:focus {
    outline: none;
  }
`;

const StUpdateBox = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-content: center;
  justify-content: flex-end;
  align-items: center;      
  button {
  border: 1px solid #eee;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-content: center;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  &:hover{  
    background-color: rgba(252, 237, 239, 0.3);
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    color : black;
  }
  }    
`;


