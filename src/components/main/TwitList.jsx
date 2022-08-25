import React, { useEffect, Fragment, useState } from "react";
import styled from "styled-components";
import Twit from "./Twit";
import { useSelector, useDispatch } from "react-redux";
import { __getPost } from "../../redux/modules/postSlice";
import { useInView } from "react-intersection-observer";
import "./TwitList.css"

function TwitList() {
  const dispatch = useDispatch();
  const twits = useSelector((state) => state.post.list);
  const twits_fake = twits;
  const [ref, inView] = useInView();
  // const hasMoreTwits = useSelector((state) => state.post.hasMoreTwits);
  // const loadTwitsLoading = useSelector((state) => state.post.isLoading);
  // const [page, setPage] = useState(1);
  // const pageSize = 5;

  // useEffect(() => {
  //   function onScroll() {
  //     // window.scrollY : 얼마나 내렸는지
  //     // document.documentElement.clientHeight : 화면에 보이는 길이
  //     // document.documentElement.scrollHeight : 총길이
  //     if (hasMoreTwits && !loadTwitsLoading) {
  //       if (
  //         window.scrollY + document.documentElement.clientHeight >
  //         document.documentElement.scrollHeight - 300
  //       ) {
  //         dispatch(__getPost({ page: page, pageSize: pageSize }));
  //         setPage((prev) => prev + 1);
  //
  //       }
  //     }
  //   }
  //   window.addEventListener("scroll", onScroll);
  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //   };
  // }, [hasMoreTwits, loadTwitsLoading, twits, dispatch]);

  // useEffect(() => {
  //   dispatch(__getPost({ page: page, pageSize: pageSize }));
  // }, [dispatch]);

  const [page, setPage] = useState(0);
  const pageSize = 5;

  useEffect(() => {
    if (twits_fake?.length === 0) {
      dispatch(__getPost({ page: page, pageSize: pageSize }));
      setPage((prev) => prev + 1);
      return;
    }
  }, []);

  useEffect(() => {
    if (twits_fake?.length !== 0 && inView) {
      dispatch(__getPost({ page: page, pageSize: pageSize }));
      setPage((prev) => prev + 1);
    }
  }, [inView]);

  // console.log(twits_fake)


  return (
    <div>
      <div className="twitListBox">
        {twits_fake &&
          twits_fake?.map((twit) => {
            return (
              <Fragment key={twit.id}>
                <Twit twit={twit} key={twit.id} />
              </Fragment>
            );
          })}
        <div ref={ref} />
      </div>
    </div>
  );
}

export default TwitList;

const TwitListBox = styled.div`
  width: 100%;
  /* border-radius: 10px; */
  border: 1px solid #eee;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  border-collapse: collapse;
`;
