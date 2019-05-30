import React from "react";
import { Comment, Rate } from "antd";
import PropTypes from "prop-types";
import "./review.css";
import { connect } from "react-redux";
import { createReviewSelector } from "../../selectors";

function Review({ review }) {
  return (
    <Comment
      className="review"
      author={review.user}
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
  // id: PropTypes.any.isRequired,
  review: PropTypes.shape({
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  }).isRequired
};

const reviewSelector = createReviewSelector();
const mapStateToProps = () => {
  return (state, props) => ({
    review: reviewSelector(state, props)
  });
};

export default connect(mapStateToProps)(Review);
