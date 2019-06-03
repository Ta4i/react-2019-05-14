import React from "react";
import { Comment, Rate } from "antd";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./review.css";
import { createUsersSelector } from "../../selectors";

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
  review: PropTypes.shape({
    userId: PropTypes.string.isRequired,
    user: PropTypes.string,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  }).isRequired
};

const initMapStateToProps = () => {
  const selector = createUsersSelector();

  return (state, ownProps) => {
    return {
      review: {
        ...ownProps.review,
        user: selector(state, ownProps)
      }
    };
  };
};

export default connect(initMapStateToProps)(Review);
