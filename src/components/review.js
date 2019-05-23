import React from "react";
import { Comment, Rate } from "antd";
import PropTypes, { object } from "prop-types";

function Review({ review }) {
  return (
    <Comment
      test-id={"review-comment"}
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

export default Review;
