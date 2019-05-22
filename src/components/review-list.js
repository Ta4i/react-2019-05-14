import React from "react";
import PropTypes from "prop-types";
import { List } from "antd";
import Review from "./review";

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
  reviews: PropTypes.arrayOf(PropTypes.object)
};

export default ReviewList;
