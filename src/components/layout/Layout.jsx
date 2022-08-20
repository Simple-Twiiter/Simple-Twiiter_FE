import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Menu, Input, Row, Col } from "antd";
import { Link } from "react-router-dom";
import UserProfile from "../users/UserProfile";
import LoginForm from "../users/LoginForm";
// import Link from "next/Link";
const { Search } = Input;

function Layout(props) {
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
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLogin ? (
            <UserProfile setIsLogIn={setIsLogIn} />
          ) : (
            <LoginForm setIsLogIn={setIsLogIn} />
          )}
        </Col>
        <Col xs={24} md={12}>
          {props.children}
        </Col>
        <Col xs={24} md={6}>
          {/* target="_blank" , 새 창을 연다 */}
          {/* REL="_noreferrer noopener" , 이전페이지, 누가 나를 열었는지 */}
          <a
            href="https://https://github.com/Simple-Twiiter/Simple-Twiiter_FE"
            target="_blank"
            REL="_noreferrer noopener"
          >
            FE 깃허브
          </a>
        </Col>
      </Row>
    </Layouts>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const Layouts = styled.div`
  background-color: #ffffff;
  width: 100%;
  min-width: 800px;
  margin: 0 auto;
`;

export default Layout;
