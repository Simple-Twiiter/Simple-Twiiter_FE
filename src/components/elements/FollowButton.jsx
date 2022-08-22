import { useState } from "react";
import RESP from "../../server/response";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FollowButton = ({ isFollow, isLogin, postId }) => {
  // ${URI.BASE}
  const URI = {
    BASE: process.env.REACT_APP_BASE_URI,
  };
  // 좋아요
  const [isfollowed, setIsFollowed] = useState(isFollow);

  const toggleFollow = async () => {
    if (!isLogin) {
      alert("로그인을 해주세요!");
      return;
    }

    if (!isfollowed) {
      // const { result, data, message } = await axios({
      //     method: "post",
      //     url: `${URI.BASE}/api/follow`,
      //     data: {
      //       contents: arg.comment,
      //     },
      //     headers: {
      //         Authorization: localStorage.getItem("accessToken"),
      //         RefreshToken: localStorage.getItem("refreshToken"),
      //       },
      //   });
      const { result, data, message } = RESP.LIKE_SUCCESS;

      // if (result) {
      //   alert(message);
      //   return;
      // }

      setIsFollowed(data);
    } else {
      // const { result, data, message } = await axios({
      //     method: "post",
      //     url: `${URI.BASE}/api/follow`,
      //     data: {
      //       contents: arg.comment,
      //     },
      //     headers: {
      //         Authorization: localStorage.getItem("accessToken"),
      //         RefreshToken: localStorage.getItem("refreshToken"),
      //       },
      //   });

      // success
      const { result, data, message } = RESP.UNLIKE_SUCCESS;

      setIsFollowed(data);
    }
  };

  return (
    <>
      {!isfollowed ? (
        <>
          <Button content={"팔로우"} onClick={toggleFollow} />
          <FontAwesomeIcon icon="fa-solid fa-heart" />
        </>
      ) : (
        <>
          <Button content={"팔로우 취소"} onClick={toggleFollow} />
        </>
      )}
    </>
  );
};

export default FollowButton;
