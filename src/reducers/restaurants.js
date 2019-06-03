import { normalizedRestaurants } from "../fixtures";
import { ADDED_NEW_REVIEW } from "../constants";

export default (restaurantsState = normalizedRestaurants, action) => {
  switch (action.type) {
    case ADDED_NEW_REVIEW:
      const { restaurantId: id, reviewId } = action.payload;
      let newRestaurantsState = [...restaurantsState];
      let currentRestaurant = newRestaurantsState.find(
        restaurant => restaurant.id === id
      );
      currentRestaurant.reviews = [...currentRestaurant.reviews, reviewId];
      return newRestaurantsState;
    default:
      return restaurantsState;
  }
};
