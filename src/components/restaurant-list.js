import React, { Component } from "react";
import Restaurant from "./restaurant";
import { accordion } from "../decorators/accordion";

class RestaurantList extends Component {
  render() {
    const {
      restaurants,

      // props from accordion decorator
      openItemId,
      toggleOpenItem,
      reviews
    } = this.props;
    return (
      <div>
        {restaurants.map(restaurant => (
          <Restaurant
            key={restaurant.id}
            {...restaurant}
            isMenuOpen={openItemId === restaurant.id}
            toggleOpenMenu={toggleOpenItem}
            reviews={restaurant.reviews}
          />
        ))}
      </div>
    );
  }
}

export default accordion(RestaurantList);
