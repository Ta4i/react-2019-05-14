import React from "react";
import { Comment, Rate } from "antd";
import PropTypes from "prop-types";

function Review({ review }) {
  return (
    <Comment
      data-automation-id="review"
      style={{
        margin: "16px",
        backgroundColor: "white"
      }}
      author={review.user}
      content={review.text}
      actions={[
        <Rate
          disabled
          defaultValue={review.rating}
          style={{ marginLeft: "24px" }}
        />
      ]}
    />
  );
}

Review.propTypes = {
  id: PropTypes.string,
  user: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number
};

export default Review;
