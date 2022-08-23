import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux/es/exports";
import { __postPost } from "../../redux/modules/postSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/elements/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import RESP from "../../server/response";

function Create() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setFocus,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const [imagePreview, setImagePreview] = useState("");
  const imageUrl = watch("imageUrl");

  const handleClick = (e) => {
    let myInput = document.getElementById("fileInput");
    myInput.click();
  };

  const onSubmitHandler = (formData) => {
    const fd = new FormData();
    fd.append("data", formData);
    fd.append("imageUrl", imageUrl[0]);
    dispatch(__postPost(fd));
  };

  // 이미지 프리뷰
  useEffect(() => {
    if (imageUrl && imageUrl.length > 0) {
      const file = imageUrl[0];
      setImagePreview(URL.createObjectURL(file));
    }
  }, [imageUrl]);

  return (
    <StCreateBox>
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        <Input
          type="text"
          name="title"
          placeholder="제목"
          required
          {...register("title")}
        />
        <Input
          type="text"
          name="contents"
          required
          {...register("contents")}
          placeholder="오늘은 어떤 일이 일어나고 있나요?"
        />
        <Input
          id="fileInput"
          accept="image/*"
          placeholder="이미지 파일"
          type="file"
          {...register("imageUrl")}
          style={{ display: "none" }}
        />
        <button onClick={handleClick}>upload a file</button>
        <ImagePreview src={imagePreview} />
        <button type="submit">Tweet</button>
      </Form>
    </StCreateBox>
  );
}

export default Create;

const StCreateBox = styled.div`
  width: 100%;
  /* border-radius: 10px; */
  border: 1px solid #eee;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const Form = styled.form`
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StButton = styled.button`
  width: 70px;
  height: 30px;
  background: #00acee;
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
`;

const TwitBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;

const ImagePreview = styled.img`
  display: flex;
  margin-top: 10px;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  margin: auto;
`;
