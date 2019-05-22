import React, { Component } from "react";
import RestaurantReview from "./restaraunt-review";
import PropTypes from "prop-types";
class RateList extends Component {
  state = {
    error: null
  };
  render() {
    const { reviews } = this.props;

    return this.state.error ? (
      "not available"
    ) : (
      <div data-automation-id={`review`}>
        {reviews.map(value => (
          <RestaurantReview
            key={value.id}
            authorName={value.user}
            text={value.text}
            rating={value.rating}
          />
        ))}
      </div>
    );
  }
}

RateList.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default RateList;
