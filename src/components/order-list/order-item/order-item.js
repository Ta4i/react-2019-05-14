import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import { removeOrder } from "../../../ac";
import "./order-item.css";
import * as PropTypes from "prop-types";

const OrderItem = props => {
  const { id, name, number, removeOrder } = props;

  const onRemoveBtnClickHandler = () => {
    removeOrder(id);
  };

  return (
    <>
      <span className="order-item__name">{name}</span>
      <span className="order-item__number">{number}</span>
      <Button
        icon="delete"
        type="primary"
        className="order-item__btn"
        onClick={onRemoveBtnClickHandler}
      >
        Remove
      </Button>
    </>
  );
};

OrderItem.propTypes = {
  id: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default connect(
  null,
  {
    removeOrder
  }
)(OrderItem);
