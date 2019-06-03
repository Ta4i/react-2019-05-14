import { normalizedReviews } from "../fixtures";
import { ADD_REVIEW } from "../constants";

export default (reviewsState = normalizedReviews, action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      const newReview = {
        id: action.payload.id,
        rating: action.payload.rating,
        text: action.payload.review,
        userId: action.payload.userId
      };

      return [...reviewsState, newReview];
    }
    default:
      return reviewsState;
  }
};
