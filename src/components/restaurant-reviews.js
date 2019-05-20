import React, { Component } from "react";
import RestaurantRating from "./restaurant-rating";

class RestaurantReviews extends Component {
  render() {
    const { toggleReview, user, text, rating } = this.props;
    return (
      toggleReview && (
        <div className={"reviews"}>
          <div className={"reviews__user"}>{user}:</div>
          <div className={"reviews__text"}>{text}</div>
          <div className={"reviews__rating"}>
            Rating:
            <div className={"restaurant-rating"}>
              <RestaurantRating rating={rating} />
            </div>
          </div>
        </div>
      )
    );
  }
}

export default RestaurantReviews;
