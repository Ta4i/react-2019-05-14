import React from "react";
import Dish from "./dish";
import { List } from "antd";
import PropTypes from "prop-types";

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

RestaurantMenu.propTypes = {
  menu: PropTypes.object
};

export default RestaurantMenu;
