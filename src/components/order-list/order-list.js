import React, { Component } from "react";
import { Divider, Table } from "antd";
import OrderListItemControl from "./order-list-item-control";
import { connect } from "react-redux";
import * as Enumerable from "linq";
import Text from "antd/es/typography/Text";
import DishControl from "../dish-control";

class OrderList extends Component {
  getTotalPrice = currentPageData => {
    const totalPrice = Enumerable.from(currentPageData).sum(
      i => i.menuItem.price * i.count
    );
    return <Text strong>Total Cost: £{totalPrice}</Text>;
  };

  columns = [
    {
      dataIndex: "menuItem.name",
      key: "menuItem.id",
      render: name => <Text strong>{name}</Text>
    },
    {
      key: "priceAndCount",
      render: (value, line) => (
        <>
          <Text>
            £{line.menuItem.price} x{line.count}
          </Text>
          <Divider type="vertical" />
          <DishControl dishId={line.menuItem.id} />
        </>
      )
    },
    {
      key: "total",
      render: (value, line) => <Text>£${line.menuItem.price * line.count}</Text>
    },
    {
      key: "actions",
      render: (value, line) => (
        <OrderListItemControl itemId={line.menuItem.id} />
      )
    }
  ];

  render() {
    const { cartItems } = this.props;
    return (
      <>
        <Table
          showHeader={false}
          pagination={false}
          dataSource={cartItems}
          columns={this.columns}
          footer={this.getTotalPrice}
        />
      </>
    );
  }
}

function mapToProps(state) {
  const { cart, restaurants } = state;

  // It's not efficient as I wanted
  // I'd like to keep dish item in a cart state
  // but it requires to update logic of cart reducer, dish item, etc
  const cartItems = Enumerable.from(restaurants)
    .selectMany(r => r.menu)
    .where(m => cart[m.id])
    .select(m => ({
      count: cart[m.id],
      menuItem: m
    }))
    .toArray();

  return {
    cartItems
  };
}

export default connect(mapToProps)(OrderList);
