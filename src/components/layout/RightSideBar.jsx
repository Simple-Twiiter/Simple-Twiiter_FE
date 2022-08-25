import React from "react";
import styled from "styled-components";

function RightSideBar() {
  return (
    <div>
      <StGitBox>
        <StGitBoxTitle>Github Address</StGitBoxTitle>
        <div>💜 Simple-Twiiter_FE</div>
        <StFEBox>
          <a
            href="https://github.com/crystal993"
            target="_blank"
            REL="_noreferrer noopener"
          >
            김수정 님
          </a>
          <a
            href="https://github.com/ParkYongWon"
            target="_blank"
            REL="_noreferrer noopener"
          >
            박용원 님
          </a>
        </StFEBox>
        <div>💜 Simple-Twiiter_BE</div>
        <StBEBox>
          <a
            href="https://github.com/JeonTaehun"
            target="_blank"
            REL="_noreferrer noopener"
          >
            전태훈 님
          </a>
          <a
            href="https://github.com/zmfkzj"
            target="_blank"
            REL="_noreferrer noopener"
          >
            김민규 님
          </a>
          <a
            href="https://github.com/kimsoungho"
            target="_blank"
            REL="_noreferrer noopener"
          >
            김성호 님
          </a>
        </StBEBox>

        <StTeamGit>
          <a
            href="https://github.com/Simple-Twiiter"
            target="_blank"
            REL="_noreferrer noopener"
          >
            Team Github Link
          </a>
        </StTeamGit>
      </StGitBox>
    </div>
  );
}

export default RightSideBar;

const StGitBox = styled.div`
  background-color: rgba(247, 249, 249, 0.4);
  width: 70%;
  height: 500px;
  margin: 130px auto auto auto;
  border: 0px solid black;
  border-radius: 15px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const StGitBoxTitle = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  padding: 20px;
  font-weight: bolder;
`;

const StTeamGit = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  padding: 20px;
  font-weight: bolder;
  a:hover {
    color: pink;
  }
`;

const StFEBox = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding: 20px;
  a:hover {
    color: pink;
  }
`;

const StBEBox = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding: 20px;
  a:hover {
    color: pink;
  }
`;
