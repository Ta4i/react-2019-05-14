import React, { Component } from "react";
import Restaurant from "./restaurant";
import { menuAccordion } from "../decorators/menu-accordion";
import { reviewAccordion } from "../decorators/review-accordion";

class RestaurantList extends Component {
  render() {
    const {
      restaurants,

      // props from decorators
      openedMenuItemId,
      toggleOpenMenuItem,
      openedReviewsItemId,
      toggleOpenReviewsItem
    } = this.props;
    return (
      <div>
        {restaurants.map(restaurant => (
          <Restaurant
            key={restaurant.id}
            {...restaurant}
            isMenuOpened={openedMenuItemId === restaurant.id}
            toggleOpenMenu={toggleOpenMenuItem}
            areReviewsOpened={openedReviewsItemId === restaurant.id}
            toggleOpenReviews={toggleOpenReviewsItem}
          />
        ))}
      </div>
    );
  }
}

export default reviewAccordion(menuAccordion(RestaurantList));
