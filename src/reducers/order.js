import { fromJS } from "immutable";
import { ORDER_COMPLETE } from "../constants";

const initialState = {
  order: {}
};

export default (orderState = fromJS(initialState), action) => {
  switch (action.type) {
    case ORDER_COMPLETE: {
      const id = action.payload.id;
      return orderState.set(
        "order",
        fromJS({
          id,
          name: action.payload.name,
          address: action.payload.address,
          phone: action.payload.phone
        })
      );
    }
    default:
      return orderState;
  }
};
