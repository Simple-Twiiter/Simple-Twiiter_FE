import React from "react";
import { Card, Avatar } from "antd";
import Button from "../elements/Button";

function UserProfile({ setIsLogIn }) {
  // 로그아웃
  const onLogoutHandler = () => {
    // axios 통신후 result가 true일 때
    setIsLogIn(false);
  };
  return (
    <Card
      actions={[
        <div key="twit">
          글
          <br />0
        </div>,
        <div key="following">
          팔로잉
          <br />0
        </div>,
        <div key="followings">
          팔로워
          <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>Crystal</Avatar>} title="Crystal" />
      <Button content={"로그아웃"} size={"small"} onClick={onLogoutHandler} />
    </Card>
  );
}

export default UserProfile;
