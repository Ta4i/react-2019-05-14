import React from "react";
import Dish from "./dish";
import { List } from "antd";

function RestaurantMenu(props) {
  return (
    <div>
      <List>
        {props.menu.map(dish => (
          <Dish key={dish.id} {...dish} />
        ))}
      </List>
    </div>
  );
}

export default RestaurantMenu;
