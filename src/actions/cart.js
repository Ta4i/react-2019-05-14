import { ADD_TO_CART, REMOVE_FROM_CART, RESET, OPEN_CART } from '../constants';

export const increaseCart = id => ({
  type: ADD_TO_CART,
  payload: {
    id
  }
});
export const decreaseCart = (id, remove = false) => ({
  type: REMOVE_FROM_CART,
  payload: {
    id,
    remove
  }
});
export const resetCart = () => ({
  type: RESET
});
export const openCart = () => ({
  type: OPEN_CART
});
