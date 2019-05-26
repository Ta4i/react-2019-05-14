import React, { useState } from "react";
import { Card, Button } from "antd";
import PropTypes from "prop-types";
import "./dish.css";
import { connect } from "react-redux";
import { increaseCart, decreaseCart } from "../../ac";

function Dish(props) {
  const { id, amount, increase, decrease, name, price, ingredients } = props;

  const onDecreaseBtnClickHandler = () => {
    decrease({
      id,
      name,
      price
    });
  };

  const onIncreaseBtnClickHandler = () => {
    increase({
      id,
      name,
      price
    });
  };

  return (
    <Card
      bordered
      actions={[
        `£${price}`,
        <>
          <span className="dish-price">{amount}</span>
          <Button.Group>
            <Button
              onClick={onDecreaseBtnClickHandler}
              type="primary"
              shape="circle"
              icon="minus"
            />
            <Button
              onClick={onIncreaseBtnClickHandler}
              type="primary"
              shape="circle"
              icon="plus"
            />
          </Button.Group>
        </>
      ]}
    >
      <Card.Meta title={name} description={ingredients.join(", ")} />
    </Card>
  );
}

Dish.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string)
};

export default connect(
  (state, ownProps) => ({
    amount: state.cart[ownProps.id] || 0
  }),
  {
    increase: increaseCart,
    decrease: decreaseCart
  }
)(Dish);
