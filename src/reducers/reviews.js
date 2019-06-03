import { normalizedReviews } from "../fixtures";

export default (reviewsState = normalizedReviews, action) => {
  switch (action.type) {
    case "ADD_REVIEW": {
    }

    default:
      return reviewsState;
  }
};
