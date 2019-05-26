import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List, Button, Descriptions } from 'antd';
import { increaseCart, decreaseCart } from '../../actions';

const DescriptionsItem = Descriptions.Item;

class OrderList extends Component {
  render() {
    const { dishes, total, add, remove } = this.props;
    return (
      <List
        size="small"
        header={<h2>Order List</h2>}
        footer={<h2>Total: {`£${total}`}</h2>}
        dataSource={dishes}
        renderItem={item => (
          <List.Item
            actions={[
              <Button size="small" onClick={() => add(item.id)} type="primary" icon="plus" />,
              <Button size="small" onClick={() => remove(item.id)} type="primary" icon="minus" />,
              <Button
                size="small"
                onClick={() => remove(item.id, true)}
                type="primary"
                icon="delete"
              />
            ]}
          >
            <Descriptions title={item.name} size="small">
              <DescriptionsItem label="Price" span={4}>{`£${item.price}`}</DescriptionsItem>
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

const mapStateToProps = state => {
  const dishes = [];
  let total = 0;
  for (const [id, value] of Object.entries(state.cart.dishes)) {
    const menuDish = state.restaurants
      .map(restaurant => restaurant.menu.find(item => item.id === id))
      .filter(item => !!item);
    if (menuDish.length) {
      dishes.push({
        id: menuDish[0].id,
        name: menuDish[0].name,
        value,
        price: menuDish[0].price
      });
      total += menuDish[0].price * value;
    }
  }
  return {
    dishes,
    total
  };
};

export default connect(
  mapStateToProps,
  {
    add: increaseCart,
    remove: decreaseCart
  }
)(OrderList);
