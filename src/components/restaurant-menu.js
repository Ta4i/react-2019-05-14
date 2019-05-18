import React from "react";
import Dish from "./dish";
import { Typography } from "antd";

function RestaurantMenu({ menu }) {
  if (!menu || menu.length <= 0) {
    return (
      <Typography level={2}>
        The restaurant hasn't provided its menu yet.
      </Typography>
    );
  }
  return (
    <div>
      {menu.map(dish => (
        <Dish key={dish.id} {...dish} />
      ))}
    </div>
  );
}

export default RestaurantMenu;
