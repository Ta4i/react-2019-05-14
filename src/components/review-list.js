import React from "react";
import PropTypes from "prop-types";
import { List } from "antd";
import Review from "./review";

function ReviewList({ id, reviews }) {
  return (
    <List data-automation-id={`review-${id}`}>
      {reviews.map(review => (
        <Review key={review.id} review={review} />
      ))}
    </List>
  );
}

ReviewList.propTypes = {
  id: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      user: PropTypes.string,
      text: PropTypes.string,
      rating: PropTypes.number
    })
  ).isRequired
};

export default ReviewList;
