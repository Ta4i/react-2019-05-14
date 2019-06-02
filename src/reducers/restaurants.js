import { normalizedRestaurants } from "../fixtures";
import { ADD_REVIEW } from "../constants";

export default (restaurantsState = normalizedRestaurants, action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      const newRestaurantsState = [...restaurantsState];
      const restaurant = newRestaurantsState.find(
        res => res.id === action.payload.restaurantId
      );
      restaurant.reviews.push(action.payload.id);
      return newRestaurantsState;
    }
    default:
      return restaurantsState;
  }
};
