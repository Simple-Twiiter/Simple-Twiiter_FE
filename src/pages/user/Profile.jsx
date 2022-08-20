import React from "react";
import Layout from "../../components/layout/Layout";
import FollowList from "../../components/profile/FollowList";

function Profile() {
  const followerList = [{ nickname: "김수정" }, { nickname: "박용원" }];
  const followingList = [{ nickname: "김수정" }, { nickname: "박용원" }];
  return (
    <>
      <Layout>
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </Layout>
    </>
  );
}

export default Profile;
