import React, { Component } from "react";
import "./review-list.css";
import ReviewsDecorator from "../../decorators/reviews-decorator";
import ReviewItem from "../review-item";

class ReviewList extends Component {
  render() {
    const { openReviews, reviews, toggleOpenReviews } = this.props;

    const reviewsList = reviews.map(review => (
      <ReviewItem key={review.id} {...review} />
    ));

    return (
      <div className="review-list">
        <button onClick={toggleOpenReviews}>
          {openReviews ? "Close reviews" : "Open reviews"}
        </button>
        {openReviews ? reviewsList : null}
      </div>
    );
  }
}

export default ReviewsDecorator(ReviewList);
