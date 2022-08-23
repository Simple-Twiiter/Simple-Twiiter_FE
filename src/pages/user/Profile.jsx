import React from "react";
import Layout from "../../components/layout/Layout";
import FollowList from "../../components/profile/FollowList";

function Profile() {
  return (
    <>
      <Layout>
        <FollowList header="팔로잉 목록" />
        <FollowList header="팔로워 목록" />
      </Layout>
    </>
  );
}

export default Profile;
