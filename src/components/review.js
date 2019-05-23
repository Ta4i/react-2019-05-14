import React from "react";

const Review = props => {
  return (
    <div>
      <strong>{props.review.user}:</strong> {props.review.text}
    </div>
  );
};

export default Review;
