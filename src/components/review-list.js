import React from "react";

function ReviewList(props) {
  const reviewsText = props.reviews.map(review => (
    <p>{`${review.user}: ${review.text}`}</p>
  ));

  return <div>{reviewsText}</div>;
}

export default ReviewList;
