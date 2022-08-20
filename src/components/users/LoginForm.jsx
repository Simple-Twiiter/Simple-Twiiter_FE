import React, { useState, useCallback } from "react";
import { Form, Input } from "antd";
import Button from "../elements/Button";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

function LoginForm({ setIsLogIn }) {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const onChangeHandler = useCallback(
    (e) => {
      const { value, name } = e.target;
      setUser({ ...user, [name]: value });
    },
    [user]
  );

  //  antd 는 e.preventDefault() 자동으로 탑재되어있으므로 안써도 됨
  const onSubmitHandler = useCallback(
    (e) => {
      console.log(user.username, user.password);
      // axios 통신후 결과가 true이면
      setIsLogIn(true);
    },
    [user.username, user.password, setIsLogIn]
  );

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
        <Button htmlType="submit" content={"로그인"} />
        <Button
          onClick={() => {
            navigate("/signup");
          }}
          content={"kakao Login"}
        ></Button>
      </ButtonWrapper>
    </FormWrapper>
  );
}

const FormWrapper = styled(Form)`
  padding: 10px;
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
