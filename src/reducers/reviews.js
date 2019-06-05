import { ADD_REVIEW } from "../constants";
import {
  LOAD_REVIEWS_START,
  LOAD_REVIEWS_SUCCESS,
  LOAD_REVIEWS_FAIL
} from "../constants/reviews";
import { Record } from "immutable";

const initialState = Record({
  isLoading: false,
  isLoaded: false,
  entities: [],
  error: null
})();

export default (reviewsState = initialState, action) => {
  switch (action.type) {
    case LOAD_REVIEWS_START: {
      return reviewsState
        .set("isLoading", true)
        .set("isLoaded", false)
        .set("error", null);
    }
    case LOAD_REVIEWS_SUCCESS: {
      return reviewsState
        .set("isLoading", false)
        .set("isLoaded", true)
        .set("entities", action.response);
    }
    case LOAD_REVIEWS_FAIL: {
      return reviewsState
        .set("isLoading", false)
        .set("isLoaded", false)
        .set("error", action.error);
    }
    case ADD_REVIEW: {
      return reviewsState.update("entities", e =>
        e.push({
          id: action.generatedId,
          userId: action.userId,
          text: action.payload.text,
          rating: action.payload.rating
        })
      );
    }
    default:
      return reviewsState;
  }
};
