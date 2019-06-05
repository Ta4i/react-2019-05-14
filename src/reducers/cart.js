import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  SUBTRACT_FROM_CART
} from "../constants";

import { Map } from "immutable";

const initialState = Map({});

export default (cartState = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const id = action.payload.id;
      return cartState.get(id)
        ? cartState.set(id, cartState.get(id) + 1)
        : cartState.set(id, 1);
    }
    case SUBTRACT_FROM_CART: {
      const id = action.payload.id;
      return cartState.get(id) === 1
        ? cartState.delete(id)
        : cartState.set(id, cartState.get(id) - 1);
    }
    case DELETE_FROM_CART: {
      const id = action.payload.id;
      return cartState.delete(id);
    }
    default:
      return cartState;
  }
};
