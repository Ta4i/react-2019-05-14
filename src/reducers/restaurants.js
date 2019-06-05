import {
  ADD_REVIEW,
  FAIL,
  LOAD_RESTAURANTS,
  START,
  SUCCESS
} from "../constants";
import { fromJS } from "immutable";

import _ from "lodash";

const initialState = fromJS({
  loaded: false,
  loading: false,
  error: null,
  entities: []
});

export default (restaurantsState = initialState, action) => {
  switch (action.type) {
    case LOAD_RESTAURANTS + START: {
      return restaurantsState.set("loading", true);
    }
    case LOAD_RESTAURANTS + SUCCESS: {
      return restaurantsState
        .set("entities", fromJS(action.response))
        .set("loading", false)
        .set("loaded", true);
    }
    case LOAD_RESTAURANTS + FAIL: {
      return restaurantsState
        .set("loading", false)
        .set("loaded", false)
        .set("error", action.error);
    }
    case ADD_REVIEW: {
      const targetIndex = _.findIndex(
        restaurantsState.get("entities").toJS(),
        r => r.id === action.payload.restaurantId
      );
      if (targetIndex >= 0) {
        return restaurantsState.update("entities", e => {
          return e.update(targetIndex, restaurant => {
            return restaurant.update("reviews", reviews => {
              return reviews.push(action.generatedId);
            });
          });
        });
      }

      return restaurantsState;

      // return {
      //   ...restaurant,
      //   reviews: [
      //     ...restaurant.reviews,
      //     action.generatedId
      //   ]
      // }
      // });
    }
    default:
      return restaurantsState;
  }
};
