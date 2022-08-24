import { useState } from "react";
import RESP from "../../server/response";
import Button from "./Button";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons"; // ♡
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons"; // ♥︎import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LikeBtn = ({ isLike, isLogin, postId, heart }) => {
  // ${URI.BASE}
  const URI = {
    BASE: process.env.REACT_APP_BASE_URI,
  };
  // 좋아요
  const [liked, setLiked] = useState(isLike);
  const [heartCount, setHeartCount] = useState(heart);

  const toggleLike = async () => {
    if (!isLogin) {
      alert("로그인을 해주세요!");
      return;
    }

    if (!liked) {
      // const { result, data, message } = await axios({
      //     method: "post",
      //     url: `${URI.BASE}/api/postLike/${postId}`,
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
      setHeartCount((prev) => prev + 1);
    } else {
      // const { result, data, message } = await axios({
      //     method: "post",
      //     url: `${URI.BASE}/api/postLike/${postId}`,
      //     headers: {
      //         Authorization: localStorage.getItem("accessToken"),
      //         RefreshToken: localStorage.getItem("refreshToken"),
      //       },
      //   });

      // success
      const { result, data, message } = RESP.UNLIKE_SUCCESS;

      setLiked(data);
      setHeartCount((prev) => prev - 1);
    }
  };

  return (
    <>
      {!liked ? (
        <LikeWrapper>
          <HeartIcon icon={regularHeart} onClick={toggleLike} />
          {heartCount}
        </LikeWrapper>
      ) : (
        <LikeWrapper>
          <HeartIcon icon={solidHeart} onClick={toggleLike} />
          {heartCount}
        </LikeWrapper>
      )}
    </>
  );
};

const HeartIcon = styled(FontAwesomeIcon)`
  font-size: 18px;
  color: ${(props) => props.theme.mainColor};
`;

const LikeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export default LikeBtn;
