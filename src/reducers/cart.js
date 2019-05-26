import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ORDER } from "../actionTypes";

export default (cartState = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const {
        dish: { id }
      } = action.payload;
      return {
        ...cartState,
        [id]: cartState[id] ? cartState[id] + 1 : 1
      };
    }
    case REMOVE_FROM_CART: {
      const {
        dish: { id }
      } = action.payload;
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
    case REMOVE_ORDER: {
      const { id } = action.payload;
      const newCartState = {
        ...cartState
      };
      delete newCartState[id];
      return newCartState;
    }
    default:
      return cartState;
  }
};
