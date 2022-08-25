import { useState } from "react";
import RESP from "../../server/response";
import Button from "./Button";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons"; // ♡
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons"; // ♥︎import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LikeBtn = ({ isLike, isLogin, postId }) => {
  // ${URI.BASE}
  const URI = {
    BASE: process.env.REACT_APP_BASE_URI,
  };
  // 좋아요
  const [liked, setLiked] = useState(isLike);

  const toggleLike = async () => {
    if (!isLogin) {
      alert("로그인을 해주세요!");
      return;
    }

    if (!liked) {
      // const { result, data, message } = await axios({
      //     method: "post",
      //     url: `${URI.BASE}/api/postLike/${postId}`,
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

      setLiked(data);
    } else {
      // const { result, data, message } = await axios({
      //     method: "post",
      //     url: `${URI.BASE}/api/postLike/${postId}`,
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

      setLiked(data);
    }
  };

  return (
    <>
      {!liked ? (
        <>
          <HeartIcon icon={regularHeart} onClick={toggleLike} />
        </>
      ) : (
        <>
          <HeartIcon icon={solidHeart} onClick={toggleLike} />
        </>
      )}
    </>
  );
};

const HeartIcon = styled(FontAwesomeIcon)`
  font-size: 35px;
  color: ${(props) => props.theme.mainColor};
  cursor: pointer;
`;

export default LikeBtn;
