import React from "react";
import { Comment } from "antd";
import RestaurantRate from "./restaurant-rate";

function RestaurantReview({ authorName, text, rating }) {
  return (
    <Comment
      author={authorName}
      content={
        <div>
          <RestaurantRate defaultValue={rating} />
          <p>{text}</p>
        </div>
      }
    />
  );
}

export default RestaurantReview;
