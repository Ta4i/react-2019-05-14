import React, { useState } from "react";
import Button from "antd/lib/button";
import "./components.css";

function Dish(props) {
  const [amount, decrease, increase] = useCounter(0);
  return (
    <div className="dish">
      <span className="dish__name">{props.name}</span>
      <span className="dish__price">
        price: <b>{props.price}</b>
      </span>
      <div className="dish__row">
        <span>amount:</span>
        <div className={"dish__row_amount"}>
          <Button
            className={"amount-btn amount-minus"}
            onClick={decrease}
            type="primary"
            shape="circle"
            icon="minus"
          />
          <span className={"dish__amount"}>
            <b>{amount}</b>
          </span>
          <Button
            className={"amount-btn amount-plus"}
            onClick={increase}
            type="primary"
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

export default Dish;
