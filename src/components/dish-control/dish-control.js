import React from "react";
import { Button } from "antd";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { increaseCart, decreaseCart } from "../../ac";

function DishControl(props) {
  const { dishId, increase, decrease } = props;
  return (
    <Button.Group>
      <Button
        onClick={() => decrease(dishId)}
        type="primary"
        shape="circle"
        icon="minus"
      />
      <Button
        onClick={() => increase(dishId)}
        type="primary"
        shape="circle"
        icon="plus"
      />
    </Button.Group>
  );
}

DishControl.propTypes = {
  dishId: PropTypes.any.isRequired
};

export default connect(
  (state, ownProps) => ({
    amount: state.cart[ownProps.id] || 0
  }),
  {
    increase: increaseCart,
    decrease: decreaseCart
  }
)(DishControl);
