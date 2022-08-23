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
    <div>
      <StCreateBox>
        Create
        <form onSubmit={onSubmitHandler}>
          <div>
            <input
              name="title"
              type="text"
              value={createPost.title}
              onChange={onChangeHandler}
              placeholder="제목"
            />
          </div>
          <div>
            <input
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
          </div>
          <button>추가하자</button>
        </form>
      </StCreateBox>
    </div>
  );
}

export default Create;

const StCreateBox = styled.div`
  width: 450px;
  height: 200px;
  border-radius: 10px;
  border: 2px solid #eee;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

const Icon = styled(FontAwesomeIcon)`
  color: #5d5fef;
`;
