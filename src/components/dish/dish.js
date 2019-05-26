import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, InputNumber, Row, Col, Descriptions } from 'antd';
import { increaseCart, decreaseCart } from '../../actions';

const DescriptionsItem = Descriptions.Item;
const ButtonGroup = Button.Group;

function Dish(props) {
  const { id, amount, ingredients, increase, decrease } = props;
  return (
    <div>
      <Descriptions
        title={props.name}
        border
        column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
      >
        <DescriptionsItem label="Price">{`£${props.price}`}</DescriptionsItem>
        <DescriptionsItem label="Ingredients">{ingredients.join(', ')}</DescriptionsItem>
      </Descriptions>
      <Row>
        <Col span={24} style={{ textAlign: 'right' }}>
          <InputNumber disabled size="small" min={0} max={100} defaultValue={0} value={amount} />
          <ButtonGroup>
            <Button size="small" onClick={() => decrease(id)} type="primary" icon="minus" />
            <Button size="small" onClick={() => increase(id)} type="primary" icon="plus" />
          </ButtonGroup>
        </Col>
      </Row>
    </div>
  );
}

Dish.propTypes = {
  id: PropTypes.string,
  amount: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  ingredients: PropTypes.arrayOf(PropTypes.string),
  increase: PropTypes.func,
  decrease: PropTypes.func
};

export default connect(
  (state, ownProps) => ({
    amount: state.cart.dishes[ownProps.id] || 0
  }),
  {
    increase: increaseCart,
    decrease: decreaseCart
  }
)(Dish);
