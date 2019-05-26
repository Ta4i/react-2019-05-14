export const increase = () => ({
  type: "INCREMENT"
});

export const decrease = () => ({
  type: "DECREMENT"
});

export const increaseCart = id => ({
  type: "INCREASE_IN_CART",
  payload: {
    id
  }
});

export const decreaseCart = id => ({
  type: "DECREASE_IN_CART",
  payload: {
    id
  }
});

export const removeFromCart = id => ({
  type: "REMOVE_FROM_CART",
  payload: {
    id
  }
});
