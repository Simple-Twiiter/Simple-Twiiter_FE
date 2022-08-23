import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/layout/Layout";
import FollowList from "../../components/profile/FollowList";
import RESP from "../../server/response";
import {
  __getfollowingList,
  __getfollowerList,
} from "../../redux/modules/followSlice";
import { useDispatch } from "react-redux";
import FollowList2 from "../../components/profile/FollowList2";

function Profile() {
  const dispatch = useDispatch();
  const followingList = useSelector((state) => state.follow.followingList);
  const followerList = useSelector((state) => state.follow.followerList);

  useEffect(() => {
    dispatch(__getfollowerList());
    dispatch(__getfollowingList());
  }, []);

  return (
    <>
      <Layout>
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
        {/* <FollowList2 header="팔로워 목록" datas={followerList} /> */}
      </Layout>
    </>
  );
}

export default Profile;
