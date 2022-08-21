import React, { useEffect, useRef, useState } from "react";
import { idCheck, passwordCheck } from "../../shared/regex";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../elements/Button";
import RESP from "../../server/response";
import axios from "axios";

function SignUpForm() {
  const navigate = useNavigate();

  const URI = {
    BASE: process.env.REACT_APP_BASE_URI,
  };
  console.log(URI.BASE);

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

  const onSubmitHandler = async (formData) => {
    console.log(formData);
    const imageUrl = watch("imageUrl");

    const fd = new FormData();
    fd.append("account", formData.account);
    fd.append("password", formData.password);
    fd.append("passwordCheck", formData.passwordCheck);
    fd.append("imageUrl", imageUrl[0]);
    // const { result, data, message } = await axios({
    //   method: "post",
    //   url: `http://${URI.BASE}/api/user/signup`,
    //   data: fd,
    // });
    const { result, data, message } = RESP.SIGN_UP_SUCCESS;
    alert(message);
    navigate("/");
  };

  const [imagePreview, setImagePreview] = useState("");
  const imageUrl = watch("imageUrl");

  const onSubmitFile = async () => {
    const inputFile = document.getElementById("fileInput");

    const formData = new FormData();
    formData.append("file", imageUrl[0]);

    // const {result, data, message} = await axios.post(`${apiURL}/api/image`, formData, {
    //   withCredentials: false,
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //   },
    // });
    const { result, data, message } = RESP.IMAGE_UPLOAD_SUCCESS;
    if (result) {
      setValue("thumbnail", data.imgUrl);
    }
  };

  // 이미지 프리뷰
  useEffect(() => {
    if (imageUrl && imageUrl.length > 0) {
      const file = imageUrl[0];
      setImagePreview(URL.createObjectURL(file));
    }
  }, [imageUrl]);

  // 초기 focus
  useEffect(() => {
    setFocus("username");
  }, [setFocus]);

  return (
    <SignUpView>
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        <Title>Sign Up</Title>
        <Container>
          <Label htmlFor="username">ID</Label>
          <InputWrapper>
            <Input
              name="username"
              placeholder="아이디"
              required
              {...register("username", {
                required: "아이디는 필수 입력사항입니다.",
                validate: (value) => {
                  const result = idCheck(value);
                  if (!result) {
                    return (
                      <ErrorMsg>
                        {"아이디는 숫자 또는 영문으로 12자 이내입니다."}
                      </ErrorMsg>
                    );
                  }
                },
              })}
            />
          </InputWrapper>
          <MsgWrapper>
            <Msg>
              {errors.username && (
                <ErrorMsg>{errors.username.message}</ErrorMsg>
              )}
            </Msg>
          </MsgWrapper>

          <Label htmlFor="password">PW</Label>
          <InputWrapper>
            <Input
              type="password"
              placeholder="비밀번호"
              {...register("password", {
                required: "비밀번호는 필수 입력사항입니다.",
                validate: (value) => {
                  const result = passwordCheck(value);
                  if (!result) {
                    return (
                      <ErrorMsg>
                        {"비밀번호는 숫자 또는 영문으로 4글자 이상입니다."}
                      </ErrorMsg>
                    );
                  }
                },
              })}
            />
          </InputWrapper>
          <MsgWrapper>
            <Msg>
              {errors.password && (
                <ErrorMsg>{errors.password.message}</ErrorMsg>
              )}
            </Msg>
          </MsgWrapper>
          <Label htmlFor="passwordCheck">PW CHECK</Label>
          <InputWrapper>
            <Input
              type="password"
              placeholder="비밀번호"
              {...register("passwordCheck", {
                required: "비밀번호는 필수 입력사항입니다.",
                validate: (value) => {
                  const result = passwordCheck(value);
                  if (!result) {
                    return (
                      <ErrorMsg>
                        {"비밀번호는 숫자 또는 영문으로 6~12자 이내입니다."}
                      </ErrorMsg>
                    );
                  } else if (watch("password") !== value) {
                    return (
                      <ErrorMsg>{"비밀번호가 일치하지 않습니다."}</ErrorMsg>
                    );
                  } else if (value.includes(watch("username"))) {
                    return <ErrorMsg>{"아이디와 달라야 합니다."}</ErrorMsg>;
                  }
                },
              })}
            />
          </InputWrapper>
          <MsgWrapper>
            <Msg>
              {errors.passwordCheck && (
                <ErrorMsg>{errors.passwordCheck.message}</ErrorMsg>
              )}
            </Msg>
          </MsgWrapper>

          <Label htmlFor="imageUrl">PROFILE IMG</Label>
          <InputWrapper>
            <Input
              id="fileInput"
              accept="image/*"
              placeholder="이미지 파일"
              type="file"
              {...register("imageUrl")}
            />
          </InputWrapper>
          <ImagePreview src={imagePreview} />
          <MsgWrapper>
            <Msg>
              {errors.imageUrl && (
                <ErrorMsg>{errors.imageUrl.message}</ErrorMsg>
              )}
            </Msg>
          </MsgWrapper>
          <ButtonWrapper>
            <Button content={"회원가입"} type="submit" />
          </ButtonWrapper>
        </Container>
      </Form>
    </SignUpView>
  );
}

const SignUpView = styled.div`
  width: 60%;
  border-radius: 10px;
  background-color: #ffffff;
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  color: ${({ theme }) => theme.mainColor};
  font-size: 26px;
  font-weight: bold;
`;

const Container = styled.div`
  width: 60%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 10px auto;
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

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  margin: 3px;
`;

const Icon = styled.div`
  color: #d5d0d0;
`;

const MsgWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-items: flex-start;
`;

const Msg = styled.div`
  margin-bottom: 10px;
  height: 50px;
`;

const CorrectMsg = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.mainColor};
`;

const ErrorMsg = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.errorTextColor};
`;

const ImagePreview = styled.img`
  display: flex;
  margin-top: 10px;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  margin: auto;
`;

export default SignUpForm;
