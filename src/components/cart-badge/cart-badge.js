import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Button } from 'antd';
import './cart-badge.css';
import { connect } from 'react-redux';
import { openCart } from '../../actions';

function CartBadge(props) {
  const { amount, open } = props;
  return (
    <Badge count={amount}>
      <Button
        icon="shopping-cart"
        size="large"
        type="primary"
        className="cart-button"
        onClick={open}
      />
    </Badge>
  );
}

CartBadge.propTypes = {
  amount: PropTypes.number.isRequired,
  open: PropTypes.func,
  cartVisible: PropTypes.bool
};

export default connect(
  state => ({
    amount: Object.values(state.cart.dishes).reduce((total, dishes) => total + dishes, 0)
  }),
  {
    open: openCart
  }
)(CartBadge);
