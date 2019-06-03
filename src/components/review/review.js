import React from "react";
import { Comment, Rate } from "antd";
import PropTypes from "prop-types";
import "./review.css";

function Review({ review }) {
  return (
    <Comment
      className="review"
      author={review.user.name}
      content={review.text}
      actions={[
        <Rate
          disabled
          allowHalf
          defaultValue={review.rating}
          className="review-rating"
        />
      ]}
    />
  );
}

Review.propTypes = {
  review: PropTypes.shape({
    userId: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  }).isRequired
};

export default Review;
