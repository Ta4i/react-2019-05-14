import React, { Component } from "react";
import { connect } from "react-redux";
import OrderListItem from "../order-list-item";
import { deleteOrder } from "../../ac/actions";
import { Button } from "antd";
import "./order-list.css";

class OrderList extends Component {
  state = {
    isOpen: false
  };

  toggleOrderList = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  getAllDishes(arr) {
    if (!arr.length) return;
    let allDishes = [];
    arr.map(restaurant => {
      allDishes.push(...restaurant.menu);
    });

    let res = {};
    allDishes.map(dish => {
      let { id, ingredients, ...all } = dish;
      res[id] = { ...all };
    });
    return res;
  }

  getOrderArray = (arr, object) => {
    let res = [];

    for (let id in object) {
      if (arr[id]) {
        res.push({
          id,
          ...arr[id],
          count: object[id]
        });
      }
    }
    return res;
  };

  getTotalValue = arr => {
    let res = 0;
    arr.forEach(item => {
      res += item.price * item.count;
    });
    return res;
  };

  render() {
    let { orderList, restaurants, deleteOrderItem } = this.props;

    let orderArray = this.getOrderArray(
      this.getAllDishes(restaurants),
      orderList
    );

    let list = orderArray.map(item => {
      return (
        <OrderListItem
          key={item.id}
          order={item}
          deleteOrderItem={() => deleteOrderItem(item.id)}
        />
      );
    });

    let noOrders = (
      <tr className="noOrders">
        <td />
        <td>No orders yet</td>
        <td />
        <td />
      </tr>
    );

    return (
      <div className="order-list">
        <div className="order-list-header">
          <Button
            type="primary"
            size="large"
            className="order-list-btn"
            onClick={this.toggleOrderList}
          >
            {this.state.isOpen ? "Close order list" : "Show order list"}
          </Button>
        </div>

        {this.state.isOpen ? (
          <table>
            <thead>
              <tr>
                <th>Dish name</th>
                <th>Price</th>
                <th>Count</th>
                <th />
              </tr>
            </thead>
            <tbody>{list.length === 0 ? noOrders : list}</tbody>
            <tfoot>
              <tr>
                <td>Total price:</td>
                <td />
                <td />
                <td className="total-price">
                  {this.getTotalValue(orderArray)} £
                </td>
              </tr>
            </tfoot>
          </table>
        ) : null}
      </div>
    );
  }
}

export default connect(
  state => ({
    orderList: state.cart,
    restaurants: state.restaurants
  }),
  {
    deleteOrderItem: deleteOrder
  }
)(OrderList);

// OrderList.propTypes = {
// 	restaurants: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			image: PropTypes.string.isRequired,
// 			name: PropTypes.string.isRequired,
// 			menu: PropTypes.array.isRequired,
// 			reviews: PropTypes.array.isRequired
// 		})
// 	).isRequired,
//
// 	openItemId: PropTypes.string,
// 	toggleOpenItem: PropTypes.func.isRequired
// };
