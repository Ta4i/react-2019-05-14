import React, { useState } from "react";
import { Button, Typography } from "antd";

const { Title, Text } = Typography;

function RestaurantMenuItem({ price, name }) {
  const [amount, decrease, increase] = useCounter(0);
  return (
    <React.Fragment>
      <Title level={4}>{name}</Title>
      <div>
        <Text>only for </Text>
        <Text strong>{price}$</Text>
        <Text> per item</Text>
      </div>
      <div>
        <Text>Amount: {amount}</Text>
        <Button
          onClick={decrease}
          type="primary"
          shape="circle"
          icon="caret-down"
          size="small"
        />
        <Button
          onClick={increase}
          type="primary"
          shape="circle"
          icon="caret-up"
          size="small"
        />
      </div>
      <div>
        <Text strong>Total Cost: {amount * price}$</Text>
      </div>
    </React.Fragment>
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

export default RestaurantMenuItem;
