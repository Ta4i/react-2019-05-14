import React from "react";
import { List } from "antd";
import Review from "./review";
import PropTypes from "prop-types";

function ReviewList({ reviews }) {
  return (
    <List>
      {reviews.map(review => (
        <Review key={review.id} review={review} />
      ))}
    </List>
  );
}

ReviewList.propTypes = {
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
