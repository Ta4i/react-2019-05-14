import React, { Component } from "react";
import Restaurant from "./restaurant";
import { accordion } from "../decorators/accordion";
import { reviewsAccordion } from "../decorators/reviews-accordion";

class RestaurantList extends Component {
  render() {
    const {
      restaurants,

      // props from decorators
      openItemId,
      toggleOpenItem,
      openReviewsRestaurantId,
      toggleOpenReviewsItem
    } = this.props;
    return (
      <div>
        {restaurants.map(restaurant => (
          <Restaurant
            key={restaurant.id}
            {...restaurant}
            isMenuOpen={openItemId === restaurant.id}
            isReviewsOpen={openReviewsRestaurantId === restaurant.id}
            toggleOpenMenu={toggleOpenItem}
            toggleOpenReviews={toggleOpenReviewsItem}
          />
        ))}
      </div>
    );
  }
}

export default reviewsAccordion(accordion(RestaurantList));
