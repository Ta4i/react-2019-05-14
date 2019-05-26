export default (cartState = {}, action) => {
  switch (action.type) {
    case "INCREASE_IN_CART": {
      const id = action.payload.id;
      return {
        ...cartState,
        [id]: cartState[id] ? cartState[id] + 1 : 1
      };
    }
    case "DECREASE_IN_CART": {
      const id = action.payload.id;
      const newCartState = {
        ...cartState
      };
      if (cartState[id] === 1) {
        delete cartState[id];
      } else if (cartState[id]) {
        newCartState[id] = newCartState[id] - 1;
      }
      return newCartState;
    }
    case "REMOVE_FROM_CART": {
      const id = action.payload.id;
      const newState = { ...cartState };
      delete newState[id];
      return newState;
    }
    default:
      return cartState;
  }
};
