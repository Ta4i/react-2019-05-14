import React from "react";
import Dish from "./dish";

function RestaurantMenu(props) {
  return (
    <div className={"mt-3"}>
      {props.menu.length > 0 && <h4>Menu:</h4>}
      {props.menu.map(dish => (
        <Dish key={dish.id} {...dish} />
      ))}
    </div>
  );
}

export default RestaurantMenu;
