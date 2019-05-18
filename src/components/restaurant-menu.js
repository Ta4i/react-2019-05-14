import React from "react";
import RestaurantMenuItem from "./restaurant-menu-item";
import { Card, Typography } from "antd";

const { Text } = Typography;

function RestaurantMenu({ menuItems }) {
  if (!menuItems || menuItems.length <= 0) {
    return (
      <div>
        <Text strong>The restaurant hasn't provided its menu yet.</Text>
      </div>
    );
  }

  return (
    <div>
      {menuItems.map(dish => (
        <Card key={dish.id} size="small" style={{ width: 300 }}>
          <RestaurantMenuItem {...dish} />
        </Card>
      ))}
    </div>
  );
}

export default RestaurantMenu;
