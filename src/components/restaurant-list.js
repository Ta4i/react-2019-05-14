import React, { Component } from "react";
import Restaurant from "./restaurant";
import { accordion } from "../decorators/accordion";

class RestaurantList extends Component {
  render() {
    const {
      restaurants,
      // props from accordion decorator
      openItemId,
      toggleOpenItem
    } = this.props;
    let flag = false;
    return (
      <div className={"restaurant-container"}>
        {restaurants.map(restaurant => (
          <Restaurant
            flag={!flag}
            key={restaurant.id}
            {...restaurant}
            isMenuOpen={openItemId === restaurant.id}
            toggleOpenMenu={toggleOpenItem}
          />
        ))}
      </div>
    );
  }
}

export default accordion(RestaurantList);
