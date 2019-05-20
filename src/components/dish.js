import React, { useState } from "react";
import Button from "antd/lib/button";

function Dish(props) {
  const [amount, decrease, increase] = useCounter(0);
  return (
    <div className="b-dish">
      <span className="b-dish__name">{props.name}</span>
      <span className="b-dish__price">{props.price}</span>
      <div className="b-dish__count">
        <Button onClick={decrease} type="primary" shape="circle" icon="minus" />
        <span>{amount}</span>
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
