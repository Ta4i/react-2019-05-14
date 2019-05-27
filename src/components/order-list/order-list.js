import React from "react";
import { List } from "antd";
import { connect } from "react-redux";
import OrderItem from "../order-item";
import { deleteDish } from "../../ac";

function OrderList(props) {
  return (
    <List>
      {Object.keys(props.order).map(id => (
        <OrderItem
          dish={props.menu.find(dish => dish.id === id)}
          count={props.order[id]}
          key={id}
          deleteDish={props.deleteDish}
        />
      ))}
    </List>
  );
}

export default connect(
  store => ({
    order: store.cart,
    menu: store.restaurants.reduce(
      (arr, restaurant) => arr.concat(restaurant.menu),
      []
    )
  }),
  { deleteDish }
)(OrderList);
