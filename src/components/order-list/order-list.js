import * as React from "react";
import { connect } from "react-redux";
import { Table, Button } from "antd";
import { removeDishFromCart } from "../../ac";

function OrderList(props) {
  const { cart, restaurants } = props;

  const orderList = restaurants
    .map(restaurant =>
      restaurant.menu.filter(dish => {
        return Object.keys(cart).some(item => item === dish.id);
      })
    )
    .filter(items => items.length > 0)
    .reduce((acc, dishes) => {
      dishes.forEach(dish => {
        acc.push(dish);
      });

      return acc;
    }, []);

  const columns = [
    {
      title: "Dish",
      dataIndex: "dish",
      key: "dish"
    },
    {
      title: "Qty",
      dataIndex: "qty",
      key: "qty"
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price"
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total"
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => {
        return (
          <span>
            {text.key !== "total-row" && (
              <Button
                onClick={() => props.removeDishFromCart(text.key)}
                type="danger"
              >
                Delete
              </Button>
            )}
          </span>
        );
      }
    }
  ];
  const dataRows = orderList.map(dish => {
    return {
      key: dish.id,
      dish: dish.name,
      qty: `${cart[dish.id]}x`,
      price: `£ ${dish.price}`,
      total: `£ ${cart[dish.id] * dish.price}`
    };
  });

  const total = Object.keys(cart).reduce((total, dishes) => {
    const dish = orderList.find(order => order.id === dishes);
    return total + dish.price * cart[dish.id];
  }, 0);

  const totalRow = {
    key: "total-row",
    dish: "Total",
    total: `£ ${total}`
  };

  const allRows = [...dataRows, totalRow];

  return (
    <div>
      <h1>Order:</h1>
      <Table columns={columns} dataSource={allRows} pagination={false} />
    </div>
  );
}

export default connect(
  state => {
    return {
      cart: state.cart,
      restaurants: state.restaurants
    };
  },
  {
    removeDishFromCart: removeDishFromCart
  }
)(OrderList);
