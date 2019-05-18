import React from "react";
import Dish from "./dish";
import { List } from "antd";

function RestaurantMenu(props) {
  return (
    <List
      style={{ marginTop: "20px" }}
      bordered
      itemLayout="horizontal"
      dataSource={props.menu}
      renderItem={dish => <Dish {...dish} />}
    />
  );
}

export default RestaurantMenu;
