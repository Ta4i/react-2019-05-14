import React from "react";
import { List, Button } from "antd";

function OrderItem({ dish, count, deleteDish }) {
  return (
    <List.Item>
      {dish.name} - {count} - {dish.price} - {count * dish.price} - &nbsp;
      <Button
        onClick={() => deleteDish(dish.id)}
        type="primary"
        shape="circle"
        icon="delete"
      />
    </List.Item>
  );
}

export default OrderItem;
