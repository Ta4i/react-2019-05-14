import React from "react";
import { Card, Row, Col, Button } from "antd";
import { orderSelector } from "../../selectors";
import { connect } from "react-redux";

const OrderComplete = props => {
  const { name, address, phone } = props;
  return (
    <Row>
      <Col span="5">
        <Card title={`Hello, ${name}.`}>
          <p>{`Your address is ${address}`}</p>
          <p>{`Your phone is ${phone}`}</p>
          <Button type="primary">Confirm order</Button>
        </Card>
      </Col>
    </Row>
  );
};

export default connect(orderSelector)(OrderComplete);
