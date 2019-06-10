import React from "react";
import PropTypes from "prop-types";
import { Badge, Button, Icon } from "antd";
import "./cart-badge.css";
import { connect } from "react-redux";
import { cartAmountSelector } from "../../selectors";
import { Link } from "react-router-dom";

function CartBadge(props) {
  return (
    <Badge count={props.amount}>
      <Button size="large" type="primary" className="cart-button">
        <Link to="/order">
          <Icon type="shopping-cart" />
        </Link>
      </Button>
    </Badge>
  );
}

CartBadge.propTypes = {
  amount: PropTypes.number.isRequired
};

export default connect(state => ({
  amount: cartAmountSelector(state)
}))(CartBadge);
