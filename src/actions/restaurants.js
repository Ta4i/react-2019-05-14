import { ADD_REVIEW_TO_RESTAURANT } from '../constants';

export const addReviewToRestaurant = (id, reviewId) => ({
  type: ADD_REVIEW_TO_RESTAURANT,
  payload: {
    id,
    reviewId
  }
});
