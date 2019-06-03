import { normalizedReviews } from "../fixtures";
import { ADD_REVIEW } from "../constants";

export default (reviewsState = normalizedReviews, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW:
      return [
        ...reviewsState,
        {
          id: payload.id,
          userId: payload.userId,
          text: payload.text,
          rating: payload.rating
        }
      ];
    default:
      return [...reviewsState];
  }
};
