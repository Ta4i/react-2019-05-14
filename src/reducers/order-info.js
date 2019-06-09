import { ADD_ORDER_INFO } from "../constants";

export default (orderInfoState = {}, action) => {
  switch (action.type) {
    case ADD_ORDER_INFO: {
      console.log(action);
      return {
        ...orderInfoState,
        ...action.payload
      };
    }

    default:
      return orderInfoState;
  }
};
