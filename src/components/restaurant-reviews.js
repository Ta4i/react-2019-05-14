import React from "react";
import Reviews from "./reviews";

function RestaurantReviews(props) {
  return (
    <div className="restaurant-reviews">
      {props.reviews.map(review => (
        <Reviews key={review.id} {...review} />
      ))}
    </div>
  );
}

export default RestaurantReviews;
