import React, { PureComponent } from "react";
import OrderRow from "./order-row";
import Total from "./total";
import "./order-list.css";
import { connect } from "react-redux";

class OrderList extends PureComponent {
  render() {
    const { orderRowsId } = this.props;
    return !orderRowsId.length ? null : (
      <div className="order">
        <h3 className="order__title">Your order</h3>
        <ul className="order__list">
          {orderRowsId.map(orderRowId => (
            <OrderRow key={orderRowId} id={orderRowId} />
          ))}
        </ul>
        <Total />
      </div>
    );
  }
}

export default connect(state => ({
  orderRowsId: Object.keys(state.cart)
}))(OrderList);
