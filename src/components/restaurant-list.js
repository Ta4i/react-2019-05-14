import React, { Component } from "react";
import Restaurant from "./restaurant";
import { accordion } from "../decorators/accordion";

class RestaurantList extends Component {
  render() {
    const {
      restaurants,

      // props from accordion decorator
      openItemId,
      openItemName,
      toggleOpenItem
    } = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          {restaurants.map(restaurant => (
            <Restaurant
              key={restaurant.id}
              {...restaurant}
              openItemId={openItemId}
              openItemName={openItemName}
              toggleOpenMenu={toggleOpenItem}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default accordion(RestaurantList);
