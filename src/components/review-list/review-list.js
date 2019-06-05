import React, { useEffect } from "react";
import { List } from "antd";
import Review, { ReviewPropType } from "../review";
import PropTypes from "prop-types";
import { createReviewsSelector, usersLoadedSelector } from "../../selectors";
import { connect } from "react-redux";
import AddReview from "../add-review";
import { loadUsers } from "../../ac";

function ReviewList({ reviews, id, usersLoaded, fetchUsers }) {
  console.log("usersLoaded-------", usersLoaded);
  useEffect(() => {
    if (!usersLoaded) fetchUsers();
  });

  return (
    <List data-automation-id="review-list">
      {reviews.map(review => (
        <Review key={review.id} review={review} />
      ))}
      <AddReview restaurantId={id} />
    </List>
  );
}

ReviewList.propTypes = {
  id: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape(ReviewPropType))
};

const initMapStateToProps = () => {
  const reviewsSelector = createReviewsSelector();
  return (state, ownProps) => {
    return {
      reviews: reviewsSelector(state, ownProps),
      usersLoaded: usersLoadedSelector(state)
    };
  };
};

export default connect(
  initMapStateToProps,
  { fetchUsers: loadUsers }
)(ReviewList);
