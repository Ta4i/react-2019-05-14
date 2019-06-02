import React from "react";
import { Comment, Rate } from "antd";
import PropTypes from "prop-types";
import "./review.css";

function Review({ review }) {
  let { name, text, rating } = review;

  return (
    <Comment
      className="review"
      author={name}
      content={text}
      actions={[
        <Rate
          disabled
          allowHalf
          defaultValue={rating}
          className="review-rating"
        />
      ]}
    />
  );
}

Review.propTypes = {
  review: PropTypes.shape({
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  }).isRequired
};

export default Review;
