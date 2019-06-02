import { normalizedReviews } from '../fixtures';
import { CREATE_REVIEW, PATCH_REVIEW } from '../constants';

export default (reviewsState = normalizedReviews, action) => {
  const { type, payload: review } = action;
  switch (type) {
    case CREATE_REVIEW: {
      reviewsState.push(review);
      break;
    }
    case PATCH_REVIEW: {
      const patchedReview = reviewsState.find(item => item.id === review.id);
      if (patchedReview) {
        patchedReview.text = review.text;
        patchedReview.rating = review.rating;
      }
      break;
    }
    default:
      break;
  }
  return reviewsState;
};
