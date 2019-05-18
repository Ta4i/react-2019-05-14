import React from "react";
import RestaurantMenuItem from "./restaurant-menu-item";
import { Card, Typography } from "antd";

const { Title } = Typography;

function RestaurantMenu({ menuItems }) {
  if (!menuItems || menuItems.length <= 0) {
    return (
      <Title level={4}>The restaurant hasn't provided its menuItems yet.</Title>
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
