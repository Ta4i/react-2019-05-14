import React, { useState } from "react";
import { List, Button } from "antd";

function Dish(props) {
  const [count, decrease, increase] = useCounter(0);
  return (
    <List.Item>
      <List.Item.Meta title={props.name} />
      <div style={{ marginRight: "32px" }}>
        <span style={{ fontSize: "20px" }}>{props.price} €</span>
      </div>
      <div>
        <Button shape="circle" icon="minus" onClick={decrease} />
        <span style={{ margin: "0 8px" }}>{count}</span>
        <Button shape="circle" icon="plus" onClick={increase} />
      </div>
    </List.Item>
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
