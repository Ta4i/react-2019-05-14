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
      if (newCartState[id] === 1) {
        delete newCartState[id];
      } else if (newCartState[id]) {
        newCartState[id] = newCartState[id] - 1;
      }
      return newCartState;
    }
    case "REMOVE_FROM_CART": {
      const id = action.payload.id;
      if (!cartState[id]) {
        return cartState;
      }

      const newState = { ...cartState };
      delete newState[id];
      return newState;
    }
    default:
      return cartState;
  }
};
