import React from "react";
import { List } from "antd";
import Review from "../review";
import PropTypes from "prop-types";

function ReviewList(props) {
  return (
    <List data-automation-id="review-list">
      {props.reviews.map(review => (
        <Review key={review.id} review={review} />
      ))}
    </List>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape(Review.propTypes))
};

export default ReviewList;
