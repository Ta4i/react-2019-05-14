import {FAIL, LOAD_DISHES, START, SUCCESS } from "../constants";
import { fromJS } from "immutable";

const initialState = {
  loaded: false,
  loading: false,
  error: null,
  entities: []
};

export default (dishesState =  fromJS(initialState), action) => {
  switch (action.type) {
    case LOAD_DISHES + START: {
      return dishesState.set("loading", true);
    }
    case LOAD_DISHES + SUCCESS: {
      return dishesState
        .set("entities", fromJS(action.response))
        .set("loading", false)
        .set("loaded", true);
    }
    case LOAD_DISHES + FAIL: {
      return dishesState
        .set("loading", false)
        .set("loaded", false)
        .set("error", action.error);
    }
    default:
      return dishesState;
  }
};
