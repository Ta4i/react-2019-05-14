import React from "react";
import RestaurantReview from "./restaurant-review";
import { Typography } from "antd";

const { Text } = Typography;

function RestaurantReviewList({ reviews }) {
  if (!reviews || reviews.length <= 0) {
    return (
      <div>
        <Text strong>There is no review for this restaurant yet.</Text>
      </div>
    );
  }
  return (
    <div>
      {reviews.map(r => (
        <RestaurantReview
          key={r.id}
          authorName={r.user}
          text={r.text}
          rating={r.rating}
        />
      ))}
    </div>
  );
}

export default RestaurantReviewList;
