import React from "react";
import { Card } from "antd";

function OrderComplete() {
  return (
    <Card
      hoverable
      style={{ width: 400 }}
      cover={
        <img
          src="https://i.makeagif.com/media/5-28-2015/iLmzG8.gif"
          alt="scrooge-mcduck-with-money"
        />
      }
    >
      <Card.Meta
        title="Thank You For Your Order"
        description="We appreciate you"
      />
    </Card>
  );
}

export default OrderComplete;
