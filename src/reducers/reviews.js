//import { normalizedReviews } from "../fixtures";
import { ADD_REVIEW, LOAD_REVIEWS, FAIL, SUCCESS } from "../constants";

export default (reviewsState = [], action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      return [
        ...reviewsState,
        {
          id: action.generatedId,
          userId: action.userId,
          text: action.payload.text,
          rating: action.payload.rating
        }
      ];
    }
    case LOAD_REVIEWS + SUCCESS: {
      return [...action.response];
    }
    case LOAD_REVIEWS + FAIL: {
      return [];
    }
    default:
      return reviewsState;
  }
};
