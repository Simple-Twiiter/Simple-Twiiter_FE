import React, { useEffect, Fragment } from "react";
import styled from "styled-components";
import Twit from "./Twit";
import { useSelector, useDispatch } from "react-redux";
import { __getPost } from "../../redux/modules/postSlice";



function TwitList() {
  const dispatch = useDispatch();
  const twits = useSelector((state) => state.post.list);

  // console.log(twits)


  useEffect(() => {
    dispatch(__getPost());
  }, [dispatch]);


  return (
    <div>
      <TwitListBox>
        {twits &&
          twits.map((twit) => {
            return (
              <Fragment key={twit.id}>
                <Twit twit={twit} key={twit.id} />
              </Fragment>
            );
          })}
      </TwitListBox>
    </div>
  );
}

export default TwitList;

const TwitListBox = styled.div`
  width: 90%;
  /* height: 700px; */
  /* border-radius: 10px; */
  /* border: 2px solid #eee; */
  margin: auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;
