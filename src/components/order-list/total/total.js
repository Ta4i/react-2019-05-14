import React from "react";
import { connect } from "react-redux";

function Total(props) {
  return (
    <div className="order__total">
      <span className="order__total-title">Total:</span>
      <span className="order__total-value">£{props.total}</span>
    </div>
  );
}

export default connect(state => ({
  total: Object.values(state.cart).reduce(
    (total, current) => total + current.sum,
    0
  )
}))(Total);
