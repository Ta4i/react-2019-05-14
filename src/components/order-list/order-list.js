import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';
import { List, Button, Descriptions } from 'antd';
import { increaseCart, decreaseCart } from '../../actions';
import Price from '../price';
import { createCartDishesSelector, createOrderTotalSelector } from '../../selectors';

const DescriptionsItem = Descriptions.Item;

class OrderList extends Component {
  render() {
    const { dishes, total, add, remove } = this.props;
    return (
      <List
        size="small"
        header={<h2>Order List</h2>}
        footer={
          <h2>
            Total: <Price value={total} />
          </h2>
        }
        dataSource={dishes}
        renderItem={item => (
          <List.Item
            actions={[
              <Button
                key={uuidv1()}
                size="small"
                onClick={() => add(item.id)}
                type="primary"
                icon="plus"
              />,
              <Button
                key={uuidv1()}
                size="small"
                onClick={() => remove(item.id)}
                type="primary"
                icon="minus"
              />,
              <Button
                key={uuidv1()}
                size="small"
                onClick={() => remove(item.id, true)}
                type="primary"
                icon="delete"
              />
            ]}
          >
            <Descriptions title={item.name} size="small">
              <DescriptionsItem label="Price" span={4}>
                <Price value={item.price} />
              </DescriptionsItem>
              <DescriptionsItem label="Value" span={6}>
                {item.value}
              </DescriptionsItem>
            </Descriptions>
          </List.Item>
        )}
      />
    );
  }
}

OrderList.propTypes = {
  dishes: PropTypes.array,
  total: PropTypes.number,
  add: PropTypes.func,
  remove: PropTypes.func
};

const initMapStateToProps = () => {
  const cartDishesSelector = createCartDishesSelector();
  const orderTotalSelector = createOrderTotalSelector();

  return (state, ownProps) => {
    return {
      dishes: cartDishesSelector(state, ownProps),
      total: orderTotalSelector(state, ownProps)
    };
  };
};

export default connect(
  initMapStateToProps,
  {
    add: increaseCart,
    remove: decreaseCart
  }
)(OrderList);
