import React, { Component } from "react";
import Restaurant from "./restaurant";
import { toggleVisibilityAccordion } from "../decorators/toggle-visibility-accordion";

class RestaurantList extends Component {
  render() {
    const {
      restaurants,

      // props from decorators
      menuItemId,
      toggleVisibility_menuItemId,
      reviewsItemId,
      toggleVisibility_reviewsItemId
    } = this.props;

    return (
      <div>
        {restaurants.map(restaurant => (
          <Restaurant
            key={restaurant.id}
            {...restaurant}
            isMenuOpened={menuItemId === restaurant.id}
            toggleOpenMenu={toggleVisibility_menuItemId}
            areReviewsOpened={reviewsItemId === restaurant.id}
            toggleOpenReviews={toggleVisibility_reviewsItemId}
          />
        ))}
      </div>
    );
  }
}

export default toggleVisibilityAccordion(
  toggleVisibilityAccordion(RestaurantList, "menuItemId"),
  "reviewsItemId"
);
