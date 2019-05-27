export default (cartState = {}, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const dish = action.payload.dish;
      const id = dish.id;

      return {
        ...cartState,
        [id]: {
          ...dish,
          amount: cartState[id] ? cartState[id].amount + 1 : 1
        }
      };
    }
    case "REMOVE_FROM_CART": {
      const { dish, amount } = action.payload;
      const id = dish.id;

      const newCartState = {
        ...cartState
      };

      if (cartState[id].amount <= amount) {
        delete newCartState[id];
      } else if (cartState[id]) {
        newCartState[id].amount = newCartState[id].amount - amount;
      }
      return newCartState;
    }
    default:
      return cartState;
  }
};
