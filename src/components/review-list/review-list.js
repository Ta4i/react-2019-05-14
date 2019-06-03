import React, { Fragment } from "react";
import { List } from "antd";
import Review from "../review";
import PropTypes from "prop-types";
import AddReviewForm from "../add-review-form";

function ReviewList({ reviews, restaurantId }) {
  return (
    <Fragment>
      <AddReviewForm restaurantId={restaurantId} />

      <List data-automation-id="review-list">
        {reviews.map(review => (
          <Review key={review.id} review={review} />
        ))}
      </List>
    </Fragment>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(Review.propTypes.review)
};

export default ReviewList;
