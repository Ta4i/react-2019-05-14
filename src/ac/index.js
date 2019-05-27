export const increase = () => ({
  type: "INCREMENT"
});
export const decrease = () => ({
  type: "DECREMENT"
});
export const increaseCart = (id, price, dishName, restaurantName) => ({
  type: "ADD_TO_CART",
  payload: {
    id,
    price: price,
    dishName,
    restaurantName
  }
});
export const decreaseCart = id => ({
  type: "REMOVE_FROM_CART",
  payload: {
    id
  }
});

export const removeFromOrder = id => ({
  type: "REMOVE_FROM_ORDER",
  payload: {
    id
  }
});
