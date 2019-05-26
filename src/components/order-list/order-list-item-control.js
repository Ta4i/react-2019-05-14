import React, { Component } from "react";
import { Icon, Button } from "antd";
import { connect } from "react-redux";
import { removeFromCart } from "../../ac";

class OrderListItemControl extends Component {
  render() {
    const { itemId, removeFromCart } = this.props;
    return (
      <Button onClick={() => removeFromCart(itemId)}>
        <Icon type="delete" />
      </Button>
    );
  }
}

export default connect(
  (state, props) => props,
  {
    removeFromCart
  }
)(OrderListItemControl);
