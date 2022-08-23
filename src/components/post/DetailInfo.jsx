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
  const isLogin = useSelector((state) => state.user.isLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const param = parseInt(params.id);
  const twitDetail = useSelector((state) => state.post.singlePost);
  const isMine = twitDetail.isMine;

  const [isEdit, setIsEdit] = useState(false);
  const [newTwit, setNewTwit] = useState({
    title: "",
    contents: "",
  });

  useEffect(() => {
    dispatch(__getSinglePost({ postId: param }));
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
          data: {
            title: newTwit.title,
            contents: newTwit.contents,
          },
        })
      );
    }
    setIsEdit(!isEdit);
    setNewTwit({
      title: "",
      contents: "",
    });
  };

  return (
    <div>
      {isEdit === false ? (
        //false 일때
        <div>
          <StDetailInfo>
            <UserImgBox>
              <UserImage src={twitDetail.member?.userImg}></UserImage>
            </UserImgBox>
            <div>{twitDetail.member?.username}</div>
            <div>{twitDetail.title}</div>
            <div>{twitDetail.content}</div>
            <Img src={twitDetail.imgUrl}></Img>
            <div>{twitDetail.createdAt}</div>
            {isLogin && isMine && (
              <>
                <button onClick={onEditHandler}>수정하기</button>
                <br />
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
                  삭제 버튼
                </button>
              </>
            )}
          </StDetailInfo>
        </div>
      ) : (
        //true 일때
        <div>
          <StDetailInfo>
            <input
              type="text"
              name="title"
              value={newTwit.title}
              onChange={onChangeHandler}
            />
            <input
              type="text"
              name="contents"
              value={newTwit.contents}
              onChange={onChangeHandler}
            />

            <div>{twitDetail.createdAt}</div>
            <button onClick={onEditHandler}>수정하기</button>
            <br />
            <button onClick={onCancelButtonHandler}>취소하기</button>
          </StDetailInfo>
        </div>
      )}
    </div>
  );
}

export default DetailInfo;

const StDetailInfo = styled.div`
  width: 450px;
  height: 500px;
  border-radius: 10px;
  border: 2px solid #eee;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 80%;
  height: 60%;
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
