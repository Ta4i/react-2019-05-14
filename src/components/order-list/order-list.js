import React, { Component } from "react";
import { List } from "antd";
import { Typography } from "antd";
import { connect } from "react-redux";

import "./order-list.css";

import Dish from "../dish/";

class OrderList extends Component {
  render() {
    const { items, total } = this.props;
    return items.length ? (
      <div className="order-list">
        <Typography.Title level={3}>Order List</Typography.Title>
        <List>
          {items.map(item => {
            return <Dish {...item} type="cart" key={item.id} />;
          })}
        </List>
        <div className="order-list__total">Total: £{total}</div>
      </div>
    ) : (
      ""
    );
  }
}

export default connect(state => ({
  items: Object.values(state.cart),
  total: Object.values(state.cart).reduce(
    (total, dich) => total + dich.price * dich.amount,
    0
  )
}))(OrderList);
