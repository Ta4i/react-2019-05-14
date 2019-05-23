import React from "react";
import PropTypes from "prop-types";
import { Comment, Rate } from "antd";

function Review({ review }) {
  return (
    <Comment
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
  review: PropTypes.shape({
    id: PropTypes.string,
    user: PropTypes.string,
    text: PropTypes.string,
    rating: PropTypes.number
  })
};

export default Review;
