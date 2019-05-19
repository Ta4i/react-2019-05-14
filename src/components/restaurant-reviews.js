import React from "react";

function RestaurantReviews(props) {
  return (
    <ul>
      {props.reviews.map(review => (
        <li>
          <b>{review.user}</b>
          <p>{review.text}</p>
          <span>Rating {review.rating}</span>
        </li>
      ))}
    </ul>
  );
}

export default RestaurantReviews;
