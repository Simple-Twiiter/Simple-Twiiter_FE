import React, { useEffect, Fragment, useState } from "react";
import styled from "styled-components";
import Twit from "./Twit";
import { useSelector, useDispatch } from "react-redux";
import { __getPost } from "../../redux/modules/postSlice";

function TwitList() {
  const dispatch = useDispatch();
  const twits = useSelector((state) => state.post.list);
  const [page, setPage] = useState(0);
  const pageSize = 5;
  useEffect(() => {
    dispatch(__getPost({ page: page, pageSize: pageSize }));
  }, [dispatch]);

  return (
    <div>
      <TwitListBox>
        TwitList
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
  width: 100%;
  height: 700px;
  border-radius: 10px;
  border: 2px solid #eee;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;
