import { normalizedRestaurants } from "../fixtures";
import { ADD_REVIEW } from "../constants";

export default (restaurantsState = normalizedRestaurants, action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      return action.payload.result.restaurants;
    }

    default:
      return restaurantsState;
  }
};
