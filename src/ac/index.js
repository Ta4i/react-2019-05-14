export const increase = () => ({
  type: "INCREMENT"
});
export const decrease = () => ({
  type: "DECREMENT"
});
export const increaseCart = dish => ({
  type: "ADD_TO_CART",
  payload: {
    dish
  }
});
export const decreaseCart = id => ({
  type: "REMOVE_FROM_CART",
  payload: {
    id
  }
});
export const removeDishFromOrder = id => ({
  type: "REMOVE_ALL_FROM_CART",
  payload: {
    id
  }
});
