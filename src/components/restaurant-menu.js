import React from "react";
import Dish from "./dish";

function RestaurantMenu({ menu }) {
  return (
    <div>
      {menu.map(dish => (
        <Dish key={dish.id} {...dish} />
      ))}
    </div>
  );
}

export default RestaurantMenu;
