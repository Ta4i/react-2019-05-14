import React from "react";
import { List } from "antd";
import Review from "../review";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createReviewListSelector } from "../../selectors";

function ReviewList(props) {
  const { reviewList } = props;
  return (
    <List data-automation-id="review-list">
      {reviewList.map(review => (
        <Review key={review.id} review={review} />
      ))}
    </List>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(Review.propTypes.review)
};

const initMapStateToProps = () => {
  const reviewListSelector = createReviewListSelector();

  return (state, ownProps) => ({
    reviewList: reviewListSelector(state, ownProps)
  });
};

export default connect(initMapStateToProps)(ReviewList);
