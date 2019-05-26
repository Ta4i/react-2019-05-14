import React, { Component } from "react";
import { Typography } from "antd";

const { Text, Title } = Typography;

class OrderListItem extends Component {
  render() {
    const { item, count } = this.props;
    return (
      <>
        Title:<Title level={2}>{item.name}</Title>
        Cost:
        <Text>
          {item.price}x{count} {item.price * count}
        </Text>
      </>
    );
  }
}

export default OrderListItem;
