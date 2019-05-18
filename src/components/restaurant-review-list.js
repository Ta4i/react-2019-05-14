import React from "react";
import RestaurantReview from "./restaurant-review";

function RestaurantReviewList({ reviews }) {
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
