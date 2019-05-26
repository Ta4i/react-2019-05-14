import React from "react";
import { Card } from "antd";
import PropTypes from "prop-types";
import "./dish.css";
import { connect } from "react-redux";
import DishControl from "../dish-control";

function Dish(props) {
  const { id, amount } = props;
  return (
    <Card
      bordered
      actions={[
        `£${props.price}`,
        <>
          <span className="dish-price">{amount}</span>
          <DishControl dishId={id} />
        </>
      ]}
    >
      <Card.Meta
        title={props.name}
        description={props.ingredients.join(", ")}
      />
    </Card>
  );
}

Dish.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string)
};

export default connect((state, ownProps) => ({
  amount: state.cart[ownProps.id] || 0
}))(Dish);
