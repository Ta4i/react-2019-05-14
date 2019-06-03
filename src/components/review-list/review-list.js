import React from "react";
import { List } from "antd";
import Review from "../review";
import PropTypes from "prop-types";
import ReviewFrom from "../review-form";

function ReviewList({ reviews, id }) {
  return (
    <>
      <ReviewFrom id={id} />
      <List data-automation-id="review-list">
        {reviews.map(review => (
          <Review key={review.id} review={review} />
        ))}
      </List>
    </>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.string
};

export default ReviewList;
