import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Card } from "antd";
import "./order-list.css";
import { increaseCart, decreaseCart, removeCart } from "../../ac";

class OrderList extends Component {
  render() {
    const { cart, rmenu, increase, decrease, remove, restaurants } = this.props;

    let listOrder = restaurants.map(item => ({
      id: item.id,
      name: item.name,
      order: getOrder(item.menu)
    }));

    listOrder = listOrder.filter(item => item.order.length > 0);

    listOrder = listOrder.map(item => ({
      id: item.id,
      name: item.name,
      order: item.order,
      total: item.order.reduce((sum, current) => sum + current.total, 0)
    }));

    const total = listOrder.reduce((sum, current) => sum + current.total, 0);

    function getOrder(menu) {
      menu = menu.filter(item => cart[item.id] > 0);

      menu = menu.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        ingredients: item.ingredients,
        count: cart[item.id],
        total: cart[item.id] * item.price
      }));

      return menu;
    }

    console.log("listOrder");
    console.log(listOrder);

    return (
      <Card
        title="Order List"
        className="order-list"
        extra={`Total: £${total}`}
      >
        {listOrder.map(item => (
          <Card
            key={item.id}
            type="inner"
            title={item.name}
            extra={`total: £${item.total}`}
            className="order-list__item"
          >
            {item.order.map(elem => (
              <Card
                key={elem.id}
                type="inner"
                title={elem.name}
                extra={`total: £${elem.total}`}
                className="order-list__item"
                actions={[
                  `£${elem.price}`,
                  <>
                    <span className="order-list__count">{elem.count}</span>
                    <Button.Group>
                      <Button
                        onClick={() => decrease(elem.id)}
                        type="primary"
                        shape="circle"
                        icon="minus"
                      />
                      <Button
                        onClick={() => increase(elem.id)}
                        type="primary"
                        shape="circle"
                        icon="plus"
                      />
                      <Button
                        onClick={() => {
                          remove(elem.id);
                        }}
                        type="danger"
                        shape="circle"
                        icon="delete"
                      />
                    </Button.Group>
                  </>
                ]}
              >
                <Card.Meta description={elem.ingredients.join(", ")} />
              </Card>
            ))}
          </Card>
        ))}
      </Card>
    );
  }
}

export default connect(
  store => ({
    cart: store.cart,
    restaurants: store.restaurants
  }),
  {
    increase: increaseCart,
    decrease: decreaseCart,
    remove: removeCart
  }
)(OrderList);
