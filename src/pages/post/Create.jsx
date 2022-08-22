import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux/es/exports";
import { __postPost } from "../../redux/modules/postSlice"


function Create() {

  const dispatch = useDispatch();

  const [createPost, setCreatePost] = useState({
    title: "",
    contents: "",
    imgUrl: "",
  });

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
    if (
      createPost.title.trim() === "" ||
      createPost.contents.trim() === "" 
      // createPost.imgUrl.trim() === ""
    ) {
      return alert("모든 항목을 입력해주세요.");
    }
    dispatch(__postPost(createPost));
    setCreatePost({ title: "", contents: "", imgUrl: "" });
  };
  
  // useEffect(() => {
  //   dispatch(__postPost());
  // }, [dispatch]);

  

  return (
    <div>
      <StCreateBox>Create
        <form onSubmit={onSubmitHandler}>
        <div>
          <input
          name="title"
          type="text"
          value={createPost.title}
          onChange={onChangeHandler}
          placeholder="제목 입력해라"
        />
        </div>
        <div>
          <input
          name="contents"
          type="text"
          value={createPost.contents}
          onChange={onChangeHandler}
          placeholder="내용 입력해라"
        />
        </div>
          
        <div>
          <input
          name="imgUrl"
          type="file"
          value={createPost.imgUrl}
          onChange={onChangeHandler}
          placeholder="이미지 입력해라"
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
