import { normalizedRestaurants } from '../fixtures';
import { ADD_REVIEW_TO_RESTAURANT } from '../constants';

export default (restaurantsState = normalizedRestaurants, action) => {
  if (action.type === ADD_REVIEW_TO_RESTAURANT) {
    const { id, reviewId } = action.payload;
    const restaurant = restaurantsState.find(item => item.id === id);
    if (restaurant) {
      restaurant.reviews.push(reviewId);
    }
  }
  return restaurantsState;
};
