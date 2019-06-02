import { CREATE_REVIEW, PATCH_REVIEW } from '../constants';

export const createReview = review => ({
  type: CREATE_REVIEW,
  payload: review
});

export const updateReview = review => ({
  type: PATCH_REVIEW,
  payload: review
});
