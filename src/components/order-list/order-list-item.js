import React, { Component } from "react";
import { Icon, Typography, Button } from "antd";
import { connect } from "react-redux";
import { removeFromCart } from "../../ac";

const { Text, Title } = Typography;

class OrderListItem extends Component {
  render() {
    const { item, count, removeFromCart } = this.props;
    return (
      <>
        Title:<Title level={2}>{item.name}</Title>
        Cost:
        <Text>
          {item.price}x{count} {item.price * count}
        </Text>
        <Button onClick={() => removeFromCart(item.id)}>
          <Icon type="delete" />
        </Button>
      </>
    );
  }
}

export default connect(
  (state, props) => props,
  {
    removeFromCart
  }
)(OrderListItem);
