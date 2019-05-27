export default (orderState = {}, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const id = action.payload.id;
      return {
        ...orderState,
        [id]: orderState[id] ? orderState[id] + 1 : 1
      };
    }
    case "REMOVE_FROM_CART": {
      const id = action.payload.id;
      const newOrderState = {
        ...orderState
      };
      if (orderState[id] === 0) {
        delete orderState[id];
      } else if (orderState[id]) {
        newOrderState[id] = newOrderState[id] - 1;
      }
      return newOrderState;
    }
    default:
      return orderState;
  }
};
