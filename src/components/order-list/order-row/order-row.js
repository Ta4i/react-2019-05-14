import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { increaseCart, decreaseCart, removeFromOrder } from "../../../ac";

class OrderRow extends PureComponent {
  state = {
    sum: this.props.orderData.price * this.props.orderData.amount
  };
  componentDidUpdate(prevProps) {
    if (prevProps.orderData.amount !== this.props.orderData.amount) {
      this.setState({
        sum: this.props.orderData.price * this.props.orderData.amount
      });
    }
  }
  render() {
    const {
      id,
      increase,
      decrease,
      remove,
      orderData: { price, dishName, restaurantName, amount, sum }
    } = this.props;
    return (
      <div className="order__row">
        <b>{dishName}</b>
        <i>from:</i>
        <span>{restaurantName}</span>
        <span>amount:</span>
        <span>{amount}</span>
        <div>
          <button onClick={() => decrease(id)}>-</button>
          <button onClick={() => increase(id, price, dishName, restaurantName)}>
            +
          </button>
        </div>
        <span>price:</span>
        <span>£{price}</span>
        <span>sum:</span>
        <b>£{sum}</b>
        <button onClick={() => remove(id)}>Remove all</button>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    orderData: state.cart[ownProps.id]
  }),
  {
    increase: increaseCart,
    decrease: decreaseCart,
    remove: removeFromOrder
  }
)(OrderRow);
