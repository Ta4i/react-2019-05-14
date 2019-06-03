import { normalizedReviews } from "../fixtures";
import { ADD_REVIEW } from "../constants";

export default (reviewsState = normalizedReviews, action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      return action.payload.result.reviews;
    }

    default:
      return reviewsState;
  }
};
