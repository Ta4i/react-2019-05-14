import React from "react";
import RestaurantMenuItem from "./restaurant-menu-item";
import { Card, Typography } from "antd";

const { Text } = Typography;

function RestaurantMenu({ menuItems }) {
  if (!menuItems || menuItems.length <= 0) {
    return <Text strong>The restaurant hasn't provided its menu yet.</Text>;
  }

  return (
    <div>
      {menuItems.map(dish => (
        <Card type="inner" key={dish.id} size="small">
          <RestaurantMenuItem {...dish} />
        </Card>
      ))}
    </div>
  );
}

export default RestaurantMenu;
