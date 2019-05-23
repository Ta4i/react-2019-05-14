import React, { useState } from "react";
import { List, Button } from "antd";
import PropTypes from "prop-types";

function Dish(props) {
  const [amount, decrease, increase] = useCounter(0);
  return (
    <List.Item>
      <div style={{ width: "100%" }}>
        <span>{props.name}</span>
        <span style={{ float: "right" }}>{props.price}$</span>
        <br />
        <span>Amount: {amount}</span>
        <div className="buttons-group">
          <Button
            style={{ margin: "0 5px" }}
            onClick={decrease}
            type="primary"
            shape="circle"
            icon="minus"
            size="small"
            disabled={amount ? null : true}
          />
          <Button
            onClick={increase}
            type="primary"
            shape="circle"
            icon="plus"
            size="small"
          />
        </div>
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

Dish.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string
};

export default Dish;
