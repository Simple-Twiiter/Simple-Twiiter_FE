import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux/es/exports";
import { __postPost } from "../../redux/modules/postSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Create() {
  const dispatch = useDispatch();
  const imageUrl = useRef(null);
  const [createPost, setCreatePost] = useState({
    title: "",
    contents: "",
  });
  const [imgUrl, setImgUrl] = useState();

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setCreatePost({
      ...createPost,
      [name]: value,
    });
  };
  // console.log(createPost)

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const imgUrl = imageUrl.current.value;

    const fd = new FormData();
    fd.append("data", createPost);
    fd.append("imageUrl", imgUrl[0]);
    console.log(imgUrl);

    if (
      createPost.title.trim() === "" ||
      createPost.contents.trim() === ""
      // createPost.imgUrl.trim() === ""
    ) {
      return alert("모든 항목을 입력해주세요.");
    }
    dispatch(__postPost(fd));
    setCreatePost({ title: "", contents: "", imgUrl: "" });
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImgUrl(URL.createObjectURL(img));
    }
  };

  return (
    
      <StCreateBox>
        Create
        <form onSubmit={onSubmitHandler}>
          <div>
            <Input
              name="title"
              type="text"
              value={createPost.title}
              onChange={onChangeHandler}
              placeholder="제목"
            />
          </div>
          <div>
            <Input
              name="contents"
              type="text"
              value={createPost.contents}
              onChange={onChangeHandler}
              placeholder="오늘은 어떤 일이 일어나고 있나요?"
            />
          </div>

          <div>
            <input
              id="imgUrl"
              accept="image/*"
              type="file"
              onChange={onImageChange}
              placeholder="이미지"
            />
            <StButton>Tweet</StButton>
          </div>
          
        </form>
      </StCreateBox>
    
  );
}

export default Create;

const StCreateBox = styled.div`
  width: 100%;
  height: 130px;
  /* border-radius: 10px; */
  border: 1px solid #eee;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  border-collapse: collapse;
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

const StButton = styled.button`
  width : 70px;
  height : 30px ;
  background: #00ACEE;
	border-radius: 20px;
	color: #fff;
	border-width: 0.5px;
	border-style: solid;
	border-color: #0075a2;
  &:hover {
    border-color: #40a9ff;
    border-right-width: 1px;
    background-color: rgba(106, 150, 240, 1);
  }

`

const TwitBox = styled.div`
  display:flex;
  margin-top : 5px;

`
const Icon = styled(FontAwesomeIcon)`
  color: #5d5fef;
`;
