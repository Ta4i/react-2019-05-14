import { FAIL, LOAD_DISHES, START, SUCCESS } from "../constants";

const initialState = {
  loaded: false,
  loading: false,
  error: null,
  entities: []
};

export default (dishesState = initialState, action) => {
  switch (action.type) {
    case LOAD_DISHES + START: {
      return {
        ...dishesState,
        loading: true
      };
    }
    case LOAD_DISHES + SUCCESS: {
      return {
        ...dishesState,
        entities: action.response,
        loading: false,
        loaded: true
      };
    }
    case LOAD_DISHES + FAIL: {
      return {
        ...dishesState,
        error: action.error,
        loading: false,
        loaded: false
      };
    }
    default:
      return dishesState;
  }
};
