import { ADD_REVIEW_TO_RESTAURANT, LOAD_RESTAURANTS } from '../constants';

export const addReviewToRestaurant = (id, reviewId) => ({
  type: ADD_REVIEW_TO_RESTAURANT,
  payload: {
    id,
    reviewId
  }
});

export const loadRestaurants = () => ({
  type: LOAD_RESTAURANTS,
  callAPI: 'http://localhost:3001/api/restaurants'
});
