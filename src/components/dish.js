import React, { useState } from 'react';
import { Button, InputNumber, Form, Row, Col } from 'antd';
import PropTypes from 'prop-types';

const ButtonGroup = Button.Group;

function useCounter(initialValue) {
  const [value, setAmount] = useState(initialValue);
  return [value, () => setAmount(value <= 0 ? 0 : value - 1), () => setAmount(value + 1)];
}

function Dish(props) {
  const [amount, decrease, increase] = useCounter(0);
  return (
    <div>
      <span>{props.name}</span>
      <span style={{ float: 'right' }}>{props.price}</span>
      <Row>
        <Col span={24} style={{ textAlign: 'right' }}>
          <ButtonGroup>
            <Button size="small" onClick={decrease} type="primary" icon="minus" />
            <Button size="small" onClick={increase} type="primary" icon="plus" />
          </ButtonGroup>
          <InputNumber disabled size="small" min={0} max={100} defaultValue={0} value={amount} />
        </Col>
      </Row>
    </div>
  );
}

Dish.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number
};

export default Dish;
