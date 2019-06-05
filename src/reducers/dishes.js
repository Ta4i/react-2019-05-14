import { fromJS } from "immutable";
import {
  LOAD_DISHES_START,
  LOAD_DISHES_SUCCESS,
  LOAD_DISHES_FAIL
} from "../constants/dishes";

const initialState = fromJS({
  isLoading: false,
  isLoaded: false,
  entities: [],
  error: null
});

export default (dishesState = initialState, action) => {
  switch (action.type) {
    case LOAD_DISHES_START: {
      return dishesState
        .set("isLoading", true)
        .set("isLoaded", false)
        .set("error", null);
    }
    case LOAD_DISHES_SUCCESS: {
      return dishesState
        .set("isLoading", false)
        .set("isLoaded", true)
        .set("entities", fromJS(action.response));
    }
    case LOAD_DISHES_FAIL: {
      return dishesState
        .set("isLoading", false)
        .set("isLoaded", false)
        .set("error", action.error);
    }
    default: {
      return dishesState;
    }
  }
};
