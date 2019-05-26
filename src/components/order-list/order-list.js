import React, { Component } from "react";
import { connect } from "react-redux";
import { List, Button, Icon } from "antd";
import { deleteFromCart, increaseCart, decreaseCart } from "../../ac";

class OrderList extends Component {
  render() {
    const { cart, dishes, increase, decrease, remove } = this.props;
    const dishList = Object.keys(cart).map(id => ({
      ...dishes.find(dish => dish.id === id),
      count: cart[id]
    }));
    return (
      <List
        bordered
        header={<strong>Order:</strong>}
        footer={
          <div style={{ textAlign: "right" }}>
            <strong>
              Total: £
              {dishList.reduce((acc, curr) => acc + curr.price * curr.count, 0)}
            </strong>
          </div>
        }
        dataSource={dishList}
        renderItem={item => (
          <List.Item
            actions={[
              <Button.Group>
                <Button
                  onClick={() => decrease(item.id)}
                  type="primary"
                  shape="circle"
                  icon="minus"
                />
                <Button
                  onClick={() => increase(item.id)}
                  type="primary"
                  shape="circle"
                  icon="plus"
                />
              </Button.Group>,
              <Button
                type="danger"
                onClick={() => {
                  remove(item.id);
                }}
              >
                <Icon type="delete" />
              </Button>
            ]}
          >
            <List.Item.Meta
              title={item.name}
              description={item.ingredients.join(", ")}
            />
            <span>
              <strong>{`£${item.price}`} </strong>X
              <strong> {item.count} </strong>=
              <strong> {item.price * item.count} </strong>
            </span>
          </List.Item>
        )}
      />
    );
  }
}

export default connect(
  store => ({
    cart: store.cart,
    dishes: [].concat(...store.restaurants.map(restaurant => restaurant.menu))
  }),
  {
    increase: increaseCart,
    decrease: decreaseCart,
    remove: deleteFromCart
  }
)(OrderList);
