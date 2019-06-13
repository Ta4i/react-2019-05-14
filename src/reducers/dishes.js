import { arrToMap, ResourceRecord } from "./utils";
import { FAIL, LOAD_DISHES, START, SUCCESS } from "../constants";

export default (dishesState = new ResourceRecord(), action) => {
  const { type, restaurantId } = action;
  switch (type) {
    case LOAD_DISHES + START: {
      let newState = dishesState
        .update("loading", loading =>
          upgradeLoadStatus(loading, restaurantId, true)
        )
        .update("loaded", loaded =>
          upgradeLoadStatus(loaded, restaurantId, false)
        )
        .set("error", null);
      return newState;
    }
    case LOAD_DISHES + SUCCESS: {
      let newState = dishesState
        .update("loading", loading =>
          upgradeLoadStatus(loading, restaurantId, false)
        )
        .update("loaded", loaded =>
          upgradeLoadStatus(loaded, restaurantId, true)
        )
        .set("error", null)
        .set(
          "entities",
          arrToMap(action.response, dishesState.entities.toJS())
        );
      return newState;
    }
    case LOAD_DISHES + FAIL: {
      return dishesState
        .update("loading", loading =>
          upgradeLoadStatus(loading, restaurantId, false)
        )
        .update("loaded", loaded =>
          upgradeLoadStatus(loaded, restaurantId, false)
        )
        .set("error", action.error);
    }
    default:
      return dishesState;
  }
};

function upgradeLoadStatus(state, key, value) {
  return { ...state, [key]: value };
}
