import {
  ADD_REVIEW,
  FAIL,
  LOAD_RESTAURANTS,
  START,
  SUCCESS
} from "../constants";
import { fromJS } from "immutable";

const initialState = {
  loaded: false,
  loading: false,
  error: null,
  entities: []
};

export default (restaurantsState = fromJS(initialState), action) => {
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
      // const targetRestaurant = restaurantsState.get('entities').find(
      //   restaurant => restaurant.get("id") === action.payload.restaurantId
      // );
      // console.log(targetRestaurant)
      // const targetIndex = targetRestaurant.get('id')// restaurantsState.get('entities').find(restargetRestaurant);
      // console.log(targetIndex)
      // return restaurantsState.get('entities').update(action.payload.restaurantId, restaurant => {
      //   return restaurant.update("reviews", reviews => {
      //     return reviews.push(action.generatedId);
      //   });
      // });
      window.restaurantsState = restaurantsState;
      return restaurantsState.get("entities").find(restaurant => {
        return restaurant.get("id") === action.payload.restaurantId;
      });
    }
    default:
      return restaurantsState;
  }
};
