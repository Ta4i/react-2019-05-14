import React from "react";
import Review from "./review";

function RestaurantReviews(props) {
  return (
    <div className={"mt-3"}>
      {props.reviews.length > 0 && <h4>Reviews:</h4>}
      {props.reviews.map(review => (
        <Review key={review.id} {...review} />
      ))}
    </div>
  );
}

export default RestaurantReviews;
