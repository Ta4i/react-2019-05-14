import {
  INCREMENT,
  DECREMENT,
  ADD_TO_CART,
  SUBTRACT_FROM_CART,
  DELETE_FROM_CART,
  ADD_REVIEW,
  LOAD_RESTAURANTS,
  LOAD_REVIEWS,
  LOAD_USERS,
  LOAD_DISHES,
  START,
  SUCCESS,
  FAIL
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

export const loadRestaurants = () => (dispatch, getState) => {
  let state = getState();
  if (!state.reviews.loaded && !state.reviews.loading) {
    dispatch({
      type: LOAD_RESTAURANTS,
      callAPI: "http://localhost:3001/api/restaurants"
    });
  }
};

export const loadReviews = () => ({
  type: LOAD_REVIEWS,
  callAPI: "http://localhost:3001/api/reviews"
});

export const loadUsers = () => ({
  type: LOAD_USERS,
  callAPI: "http://localhost:3001/api/users"
});

export const loadDishes = () => ({
  type: LOAD_DISHES,
  callAPI: "http://localhost:3001/api/dishes"
});

export const loadAllDataForReviews = () => (dispatch, getState) => {
  const state = getState();

  if (!state.reviews.loaded && !state.reviews.loading) {
    dispatch({ type: LOAD_REVIEWS + START });
    fetch("http://localhost:3001/api/reviews")
      .then(res => res.json())
      .then(data => {
        dispatch({ type: LOAD_REVIEWS + SUCCESS, response: data });
      })
      .catch(e => dispatch({ type: LOAD_REVIEWS + FAIL, error: e }));
  }

  if (!state.users.loaded && !state.users.loading) {
    dispatch({ type: LOAD_USERS + START });
    fetch("http://localhost:3001/api/users")
      .then(res => res.json())
      .then(data => {
        dispatch({ type: LOAD_USERS + SUCCESS, response: data });
      })
      .catch(e => dispatch({ type: LOAD_USERS + FAIL, error: e }));
  }
};
