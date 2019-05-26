import {
  INCREMENT,
  DECREMENT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_ORDER
} from "../actionTypes";

export const increase = () => ({
  type: INCREMENT
});
export const decrease = () => ({
  type: DECREMENT
});
export const increaseCart = dish => ({
  type: ADD_TO_CART,
  payload: {
    dish
  }
});
export const decreaseCart = dish => ({
  type: REMOVE_FROM_CART,
  payload: {
    dish
  }
});
export const removeOrder = id => ({
  type: REMOVE_ORDER,
  payload: {
    id
  }
});
