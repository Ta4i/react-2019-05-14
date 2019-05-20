import React, { useState } from "react";

function Dish(props) {
  const [amount, decrease, increase] = useCounter(0);
  return (
    <div>
      <span>{props.name} </span>
      <span style={{ float: "right" }} className="font-weight-bold">
        {props.price} $
      </span>
      <div className={"mt-1 mb-2"}>
        <button onClick={decrease} className={"btn btn-secondary"}>
          -
        </button>
        <span className={"pr-3 pl-3"}>{amount}</span>
        <button onClick={increase} className={"btn btn-secondary"}>
          +
        </button>
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
