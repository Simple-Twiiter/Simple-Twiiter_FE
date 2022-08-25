import React from "react";
import { Avatar, Divider, List, Skeleton } from "antd";
// import { List, Card, StopOutlined } from "antd";
import Button from "../elements/Button";
import PropTypes from "prop-types";

function FollowList({ header, data }) {
  return (
    //dataSource : data, data 리스트
    <List
      style={{ marginBottom: 20 }}
      size="small"
      header={<div>{header}</div>}
      loadMore={
        <div>
          <Button content={"더보기"} />
        </div>
      }
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item key={item.email}>
          <List.Item.Meta
            avatar={<Avatar src={item.imgUrl} />}
            title={<div>{item.username}</div>}
            // description={item.username}
          />
          <div>Content</div>
        </List.Item>
      )}
    />
    // <List
    //   style={{ marginBottom: 20 }}
    //   grid={{ gutter: 4, xs: 2, md: 3 }}
    //   size="small"
    //   header={<div>{header}</div>}
    //   loadMore={
    //     <div>
    //       <Button content={"더보기"} />
    //     </div>
    //   }
    //   bordered
    //   dataSource={data}
    //   renderItem={(item) => (
    //     <List.Item style={{ marginTop: 20 }}>
    //       <Card>
    //         <Card.Meta description={item.username} />
    //       </Card>
    //     </List.Item>
    //   )}
    // />
  );
}

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default FollowList;
