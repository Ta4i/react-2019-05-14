import React from "react";
import { List } from "antd";
import Review from "./review";
import { PropTypes } from "prop-types";

function ReviewList({ reviews }) {
  return (
    <List>
      {reviews.map(review => (
        <Review
          data-aid={`review-${review.id}`}
          key={review.id}
          review={review}
        />
      ))}
    </List>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired
    })
  ).isRequired
};

export default ReviewList;
