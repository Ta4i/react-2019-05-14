import React, { Component } from "react";
import ReviewComponent from "./review";

class ReviewsList extends Component {
  render() {
    const { reviews } = this.props;

    return (
      <div>
        {this.props.reviews.map(review => (
          <ReviewComponent key={review.id} review={review} />
        ))}
      </div>
    );
  }
}

export default ReviewsList;
