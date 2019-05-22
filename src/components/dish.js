import React, { useState } from "react";
import Button from "antd/lib/button";
import PropTypes from "prop-types";

function Dish(props) {
  const [amount, decrease, increase] = useCounter(0);
  return (
    <div className="dish-block">
      <span className="dish-name">{props.name}</span>
      <span className="price">{props.price}$ </span>
      <hr />
      <div className="test">
        <div className="dish-minus">
          <Button
            className="button-minus"
            onClick={decrease}
            shape="circle"
            icon="minus"
          />
        </div>

        <div className="dish-amount">
          <h2>{amount}</h2>
        </div>
        <div className="dish-plus">
          <Button
            className="button-plus"
            onClick={increase}
            shape="circle"
            icon="plus"
          />
        </div>
      </div>
    </div>
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

Dish.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number
};
export default Dish;
