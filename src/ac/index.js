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
export const removeCart = (dish, amount) => ({
  type: "REMOVE_FROM_CART",
  payload: {
    dish,
    amount
  }
});
