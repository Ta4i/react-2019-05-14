import React, { useState } from "react";
import Button from "antd/lib/button/index";
import "./dish.css";

function Dish(props) {
  const [amount, decrease, increase] = useCounter(0);
  return (
    <div className="dish">
      <div className="top">
        <span className="dish-name">{props.name}</span>
        <span className="dish-price">{props.price}</span>
      </div>
      <div className="bottom">
        <span className="amount">{amount}</span>
        <Button onClick={decrease} type="primary" shape="circle" icon="minus" />
        <Button onClick={increase} type="primary" shape="circle" icon="plus" />
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

export default Dish;
