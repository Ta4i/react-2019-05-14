import React from "react";
import { Comment, Typography } from "antd";
import RestaurantRating from "./restaurant-rating";

const { Title, Text } = Typography;

function RestaurantReview({ authorName, text, rating }) {
  return (
    <Comment
      author={<Title level={4}>{authorName}</Title>}
      content={
        <div>
          <RestaurantRating defaultValue={rating} />
          <br />
          <Text>{text}</Text>
        </div>
      }
    />
  );
}

export default RestaurantReview;
