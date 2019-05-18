import React from "react";
import { Comment } from "antd";
import RestaurantRating from "./restaurant-rating";

function RestaurantReview({ authorName, text, rating }) {
  return (
    <Comment
      author={authorName}
      content={
        <div>
          <RestaurantRating defaultValue={rating} />
          <p>{text}</p>
        </div>
      }
    />
  );
}

export default RestaurantReview;
