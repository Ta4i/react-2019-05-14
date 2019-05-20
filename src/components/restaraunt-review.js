import React from "react";
import { Comment, Typography } from "antd";
import Rate from "./rate";

const { Title, Text } = Typography;

function RestaurantReview({ authorName, text, rating }) {
  return (
    <Comment
      author={<Title level={4}>{authorName}</Title>}
      content={
        <div>
          <Rate defaultValue={rating} />
          <br />
          <Text>{text}</Text>
        </div>
      }
    />
  );
}

export default RestaurantReview;
