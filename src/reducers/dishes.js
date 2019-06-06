//import { normalizedDishes } from "../fixtures";
import { LOAD_DISHES, FAIL, SUCCESS } from "../constants";
export default (dishesState = [], action) => {
  switch (action.type) {
    case LOAD_DISHES + SUCCESS: {
      return [...action.response];
    }
    case LOAD_DISHES + FAIL: {
      return [];
    }
    default:
      return dishesState;
  }
};
