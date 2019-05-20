import React, { Component } from "react";
import Restaurant from "./restaurant";
import { accordion } from "../decorators/accordion";

import "./restaurant-list.css";

class RestaurantList extends Component {
  render() {
    const {
      restaurants,

      // props from accordion decorator
      openItemId,
      toggleOpenItem
    } = this.props;
    return (
      <div className="b-restaurant-list">
        {restaurants.map(restaurant => (
          <Restaurant
            key={restaurant.id}
            {...restaurant}
            isMenuOpen={openItemId === restaurant.id}
            toggleMenu={toggleOpenItem}
          />
        ))}
      </div>
    );
  }
}

export default accordion(RestaurantList);
