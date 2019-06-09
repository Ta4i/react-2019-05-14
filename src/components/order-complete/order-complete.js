import React from "react";
import { List } from "antd";
import "./order-complete.css";
import { connect } from "react-redux";
import Price from "../price";
import { selectAllDishesAndTotalPrice, selectOrderInfo } from "../../selectors";

function OrderComplete(props) {
  const { dishes } = props.order;

  const { address, name, phone } = props.orderInfo;

  return (
    <div className="order-info">
      <div className="left">
        <p>
          <span>Name:</span>
          <br />
          {name}
        </p>
        <p>
          <span>Phone:</span>
          <br />
          {phone}
        </p>
        <p>
          <span>Address:</span>
          <br />
          {address}
        </p>
      </div>

      <div className="right">
        {dishes.map(dish => (
          <List.Item
            key={dish.id}
            className="order-item"
            actions={[
              <>
                {`${dish.amount}x`}
                <Price className="dish-amount" value={dish.price} />
                .....
                <Price
                  className="dish-amount"
                  value={dish.totalDishPrice}
                />{" "}
              </>
            ]}
          >
            {dish.name}
          </List.Item>
        ))}
        <List.Item className="total-price">{props.order.totalPrice}</List.Item>
      </div>
    </div>
  );
}

export default connect(
  state => ({
    order: selectAllDishesAndTotalPrice(state),
    orderInfo: selectOrderInfo(state)
  }),
  null
)(OrderComplete);
