export default (cartState = {}, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id, price, ...data } = action.payload;
      return {
        ...cartState,
        [id]: cartState[id]
          ? {
              ...cartState[id],
              amount: cartState[id].amount + 1,
              sum: cartState[id].sum + cartState[id].price
            }
          : { ...data, price: price, amount: 1, sum: price }
      };
    }
    case "REMOVE_FROM_CART": {
      const id = action.payload.id;
      if (!cartState[id]) return cartState;
      const newCartState = {
        ...cartState
      };
      if (newCartState[id].amount === 1) {
        delete newCartState[id];
      } else {
        newCartState[id] = {
          ...newCartState[id],
          amount: newCartState[id].amount - 1,
          sum: newCartState[id].sum - newCartState[id].price
        };
      }
      return newCartState;
    }
    case "REMOVE_FROM_ORDER": {
      const id = action.payload.id;
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
