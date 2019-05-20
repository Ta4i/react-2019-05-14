import React from "react";
import RestaurantReview from "./restaraunt-review";

function RateList({ reviews }) {
  if (!reviews || reviews.length <= 0) {
    return (
      <div>
        <p>There is no review for this restaurant yet.</p>
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

export default RateList;
