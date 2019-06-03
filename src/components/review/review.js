import React from "react";
import { Comment, Rate } from "antd";
import PropTypes from "prop-types";
import "./review.css";
import { reviewSelector, userSelector } from "../../selectors";
import { connect } from "react-redux";

function Review(props) {
  return (
    <Comment
      className="review"
      author={props.name}
      content={props.text}
      actions={[
        <Rate
          disabled
          allowHalf
          defaultValue={props.rating}
          className="review-rating"
        />
      ]}
    />
  );
}

Review.propTypes = {
  review: PropTypes.shape({
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  }).isRequired
};

export default connect((state, ownProps) => ({
  userId: state.users[ownProps.userId] || 0,
  ...reviewSelector(state, ownProps),
  ...userSelector(state, ownProps)
}))(Review);
