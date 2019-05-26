export default (cartState = {}, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const dish = action.payload.dish;
      return {
        ...cartState,
        [dish.id]: {
          ...dish,
          amount: cartState[dish.id] ? cartState[dish.id].amount + 1 : 1
        }
      };
    }
    case "REMOVE_FROM_CART": {
      const id = action.payload.id;
      const newCartState = {
        ...cartState
      };
      if (cartState[id] && cartState[id].amount === 1) {
        delete newCartState[id];
      } else if (cartState[id]) {
        newCartState[id].amount = newCartState[id].amount - 1;
      }
      return newCartState;
    }
    case "REMOVE_ALL_FROM_CART": {
      const id = action.payload.id;
      const newState = {
        ...cartState
      };
      if (cartState[id]) {
        delete newState[id];
      }
      return newState;
    }
    default:
      return cartState;
  }
};
