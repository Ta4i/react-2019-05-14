import { normalizedReviews } from "../fixtures";
import { ADDED_NEW_REVIEW } from "../constants";

export default (reviewsState = normalizedReviews, action) => {
  switch (action.type) {
    case ADDED_NEW_REVIEW:
      const { reviewId: id, userId, text, rating } = action.payload;
      return [...reviewsState, { id, userId, text, rating }];
    default:
      return reviewsState;
  }
};
