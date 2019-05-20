import React from "react";
import Review from "./review";

const VisitorReviews = props => {
  return (
    <div>
      {props.reviews.map(review => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
};

export default VisitorReviews;
