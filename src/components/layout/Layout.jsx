import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Menu, Input, Row, Col } from "antd";
import { Link } from "react-router-dom";
import UserProfile from "../users/UserProfile";
import LoginForm from "../users/LoginForm";
import { useSelector } from "react-redux";
import RightSideBar from "../elements/RightSideBar";

function Layout(props) {
  const isLogin = useSelector((state) => state.user.isLogin);
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
          {isLogin ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {props.children}
        </Col>
        <Col xs={24} md={6}>
          <RightSideBar />
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
