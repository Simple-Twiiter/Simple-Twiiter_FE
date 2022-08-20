import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Menu, Input, Row, Col } from "antd";
import { Link } from "react-router-dom";
import UserProfile from "../users/UserProfile";
import LoginForm from "../users/LoginForm";
// import Link from "next/Link";
const { Search } = Input;

function SignUpLayout(props) {
  const [isLogin, setIsLogIn] = useState(false);
  return (
    <Layouts>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link to="/">
            <a>Twitter</a>
          </Link>
        </Menu.Item>
        {isLogin ? (
          <Menu.Item>
            <Link to="/profile">프로필</Link>
          </Menu.Item>
        ) : (
          <Menu.Item>
            <Link to="/signup">
              <a>회원가입</a>
            </Link>
          </Menu.Item>
        )}
      </Menu>
      <Row>
        <Col xs={24} md={24}>
          {props.children}
        </Col>
      </Row>
    </Layouts>
  );
}

const Layouts = styled.div`
  background-color: #ffffff;
  width: 100%;
  min-width: 800px;
  margin: 0 auto;
`;

export default SignUpLayout;
