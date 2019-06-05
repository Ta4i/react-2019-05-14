import { LOAD_USERS } from "../constants/users";
import { LOAD_DISHES } from "../constants/dishes";
import { LOAD_REVIEWS } from "../constants/reviews";
import {
  INCREMENT,
  DECREMENT,
  ADD_TO_CART,
  SUBTRACT_FROM_CART,
  DELETE_FROM_CART,
  ADD_REVIEW,
  LOAD_RESTAURANTS
} from "../constants";

export const increase = () => ({
  type: INCREMENT
});
export const decrease = () => ({
  type: DECREMENT
});
export const increaseCart = id => ({
  type: ADD_TO_CART,
  payload: {
    id
  }
});
export const decreaseCart = id => ({
  type: SUBTRACT_FROM_CART,
  payload: {
    id
  }
});
export const deleteFromCart = id => ({
  type: DELETE_FROM_CART,
  payload: {
    id
  }
});
export const addReview = (userName, rating, text, restaurantId) => ({
  type: ADD_REVIEW,
  payload: {
    userName,
    rating,
    text,
    restaurantId
  },
  generateId: true,
  provideUserId: true
});

export const loadRestaurants = () => ({
  type: LOAD_RESTAURANTS,
  callAPI: "http://localhost:3001/api/restaurants"
});

export const loadUsers = () => ({
  type: LOAD_USERS,
  callAPI: "http://localhost:3001/api/users"
});

export const loadReviews = () => ({
  type: LOAD_REVIEWS,
  callAPI: "http://localhost:3001/api/reviews"
});

export const loadDishes = () => ({
  type: LOAD_DISHES,
  callAPI: "http://localhost:3001/api/dishes"
});
