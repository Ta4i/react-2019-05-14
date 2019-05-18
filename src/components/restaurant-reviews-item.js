import React from "react";
import { List, Rate } from "antd";

const RestaurantReviewsItem = props => {
  const { user, text, rating } = props;

  return (
    <List.Item>
      <div>
        <div>User: {user}</div>
        <div>
          <span style={{ marginRight: "10px" }}>Rating:</span>
          <Rate defaultValue={rating} disabled />
        </div>
        <div style={{ marginTop: "5px" }}>Text: {text}</div>
      </div>
    </List.Item>
  );
};

export default RestaurantReviewsItem;
