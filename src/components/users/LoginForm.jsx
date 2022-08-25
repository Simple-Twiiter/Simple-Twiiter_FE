import React, { useState, useCallback } from "react";
import { Form, Input } from "antd";
import Button from "../elements/Button";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import RESP from "../../server/response";
import { useDispatch } from "react-redux";
import { login } from "../../redux/modules/userSlice";
import axios from "axios";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", password: "" });

  const onChangeHandler = useCallback(
    (e) => {
      const { value, name } = e.target;
      setUser({ ...user, [name]: value });
    },
    [user]
  );

  const URI = {
    BASE: process.env.REACT_APP_BASE_URI,
  };

  //  antd 는 e.preventDefault() 자동으로 탑재되어있으므로 안써도 됨
  const onSubmitHandler = useCallback(async (e) => {
    // axios 통신후 결과가 true이면
    const { result, data, headers, message } = await axios({
      method: "post",
      url: `${URI.BASE}/api/user/login`,
      data: user,
    });
    // const { result, data, headers, message } = RESP.LOGIN_SUCCESS;
    if (data.result) {
      const { authorization, refreshtoken } = headers;
      dispatch(login(data.data));
      localStorage.setItem("Authorization", authorization);
      localStorage.setItem("RefreshToken", refreshtoken);
      localStorage.setItem("username", data.data.username);
    } else {
    }
  }, []);

  return (
    // onFinish가 onSubmit임.
    <FormWrapper onFinish={onSubmitHandler}>
      <InputWrapper>
        <Label htmlFor="username">아이디</Label>
        <br />
        <SearchInput
          name="username"
          type="text"
          value={user.username}
          onChange={onChangeHandler}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="password">패스워드</Label>
        <br />
        <SearchInput
          name="password"
          type="password"
          value={user.password}
          onChange={onChangeHandler}
          required
        />
      </InputWrapper>
      <ButtonWrapper>
        <Button
          htmlType="submit"
          content={"로그인"}
          onClick={() => {
            navigate("/");
          }}
        />
        <Button content={"kakao Login"}></Button>
      </ButtonWrapper>
    </FormWrapper>
  );
}

const FormWrapper = styled(Form)`
  padding: 10px;
  width: 80%;
`;

const InputWrapper = styled.div``;

const Label = styled.label`
  margin-bottom: 10px;
`;

const SearchInput = styled(Input)`
  vertical-align: middle;
`;

const ButtonWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export default LoginForm;
