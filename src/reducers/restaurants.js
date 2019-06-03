import { normalizedRestaurants } from "../fixtures";
import { ADD_REVIEW } from "../constants";

export default (restaurantsState = normalizedRestaurants, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW:
      let newState = [...restaurantsState];
      let restaurant = newState.find(item => item.id === payload.restaurant);
      restaurant.reviews = [...restaurant.reviews, payload.id];
      return newState;
    default:
      return [...restaurantsState];
  }
};
