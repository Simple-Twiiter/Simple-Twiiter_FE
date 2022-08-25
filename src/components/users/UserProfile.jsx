import React, { useEffect } from "react";
import { Card, Avatar } from "antd";
import Button from "../elements/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/modules/userSlice";
import RES from "../../server/response";
import { useSelector } from "react-redux";
import { __getSingleUser } from "../../redux/modules/userSlice";
import axios from "axios";

function UserProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const userInfoCount = useSelector((state) => state.user.userInfoCount);

  const URI = {
    BASE: process.env.REACT_APP_BASE_URI,
  };

  // 로그아
  const onLogoutHandler = async () => {
    // axios 통신후 result가 true일 때
    // axios 통신후 결과가 true이면
    // const { result, data, headers } = await axios.post(
    //   `${URI.BASE}/api/logout`,
    //   {
    //     headers: {
    //       Authorization: localStorage.getItem("Authorization"),
    //       RefreshToken: localStorage.getItem("RefreshToken"),
    //     },
    //   }
    // );

    const { result, data, headers } = await axios({
      method: "post",
      url: `${URI.BASE}/api/logout`,
      headers: {
        Authorization: localStorage.getItem("Authorization"),
        RefreshToken: localStorage.getItem("RefreshToken"),
      },
    });
    // const { result, data, message } = RES.LOGOUT_SUCCESS;
    dispatch(logout());
    localStorage.removeItem("Authorization");
    localStorage.removeItem("RefreshToken");
    localStorage.removeItem("username");
    // alert(message);
    navigate("/");
  };

  useEffect(() => {
    dispatch(__getSingleUser({ memberId: username }));
  });

  return (
    <Card
      actions={[
        <div key="twit">
          글
          <br />
          {userInfoCount.postCount}
        </div>,
        <div key="following">
          팔로잉
          <br />
          {userInfoCount.followingCount}
        </div>,
        <div key="followings">
          팔로워
          <br />
          {userInfoCount.followerCount}
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>Crystal</Avatar>} title="Crystal" />
      <Button content={"로그아웃"} size={"small"} onClick={onLogoutHandler} />
    </Card>
  );
}

export default UserProfile;
