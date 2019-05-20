import React, { Component } from "react";
import Restaurant from "./restaurant";
import { accordion } from "../decorators/accordion";
import { accordionWrapper } from "../decorators/accordion-wrapper";

class RestaurantList extends Component {
  render() {
    const {
      restaurants,

      // props from accordion decorator
      openItemId,
      toggleOpenItem,
      toggleOpenElement,
      openElementId
    } = this.props;
    return (
      <div className="restaurant-list">
        {restaurants.map(restaurant => (
          <Restaurant
            key={restaurant.id}
            {...restaurant}
            isMenuOpen={openItemId === restaurant.id}
            toggleOpenMenu={toggleOpenItem}
            isReviewsOpen={openElementId === restaurant.id}
            toggleOpenReviews={toggleOpenElement}
          />
        ))}
      </div>
    );
  }
}

export default accordionWrapper(accordion(RestaurantList));
