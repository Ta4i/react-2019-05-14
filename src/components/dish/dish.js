import React from "react";
import { Card, Button, Icon } from "antd";
import PropTypes from "prop-types";
import "./dish.css";
import { connect } from "react-redux";
import { increaseCart, removeCart } from "../../ac";

function Dish(props) {
  const {
    id,
    amount,
    name,
    price,
    ingredients,
    type,
    increase,
    removeCart
  } = props;

  const dish = {
    id: id,
    name: name,
    price: price,
    ingredients: ingredients
  };

  const actions = [
    `£${props.price}`,
    <>
      <span className="dish-price">{amount}</span>
      <Button.Group>
        <Button
          onClick={() => removeCart(dish, 1)}
          type="primary"
          shape="circle"
          icon="minus"
        />
        <Button
          onClick={() => increase(dish)}
          type="primary"
          shape="circle"
          icon="plus"
        />
      </Button.Group>
    </>
  ];

  if (type === "cart") {
    actions.push(
      <>
        <span className="dish-price">Total: </span>
        <span className="dish-price">£{amount * dish.price}</span>
      </>,
      <Icon type="delete" onClick={() => removeCart(dish, amount)} />
    );
  }

  return (
    <Card bordered actions={actions}>
      <Card.Meta title={name} description={ingredients.join(", ")} />
    </Card>
  );
}

export const type = {
  values: ["menu", "cart"],
  default: "menu"
};

Dish.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string),
  type: PropTypes.oneOf(type.values)
};

Dish.defaultProps = {
  type: type.default
};

export default connect(
  (state, ownProps) => ({
    amount: state.cart[ownProps.id] ? state.cart[ownProps.id].amount : 0
  }),
  {
    increase: increaseCart,
    removeCart: removeCart
  }
)(Dish);
