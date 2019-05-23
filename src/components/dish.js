import React, { useState } from "react";
import { Card, Button } from "antd";
import PropTypes from "prop-types";

function Dish(props) {
  const [amount, decrease, increase] = useCounter(0);
  return (
    <Card
      bordered
      actions={[
        `£${props.price}`,
        <>
          <span style={{ margin: "0 12px" }} data-automation-id="dish-amount">
            {amount}
          </span>
          <Button.Group>
            <Button
              onClick={decrease}
              type="primary"
              shape="circle"
              icon="minus"
              data-automation-id="dish-amount-decrease"
            />
            <Button
              onClick={increase}
              type="primary"
              shape="circle"
              icon="plus"
              data-automation-id="dish-amount-increase"
            />
          </Button.Group>
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

function useCounter(initialValue) {
  const [value, setAmount] = useState(initialValue);
  return [
    value,
    () => setAmount(value <= 0 ? 0 : value - 1),
    () => setAmount(value + 1)
  ];
}

Dish.defaultProps = {
  ingredients: []
};

Dish.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  ingredients: PropTypes.arrayOf(PropTypes.string)
};

export default Dish;
