import { ADDED_NEW_REVIEW } from "../constants";
import uuid from "uuid";

export const logger = store => next => action => {
  console.log("before", store.getState());
  console.log("action", action);
  next(action);
  console.log("after", store.getState());
};

export const handleNewReview = store => next => action => {
  if (action.type === ADDED_NEW_REVIEW) {
    const users = store.getState().users;
    const reviews = store.getState().reviews;
    const isUserExists = users.some(user => user.name === action.payload.name);
    let newReviewId = null;
    do {
      newReviewId = uuid.v4();
      // eslint-disable-next-line
    } while (reviews.some(review => review.id === newReviewId));
    action.payload.reviewId = newReviewId;
    if (!isUserExists) {
      let newUserId = null;
      do {
        newUserId = uuid.v4();
        // eslint-disable-next-line
      } while (users.some(user => user.id === newUserId));
      action.payload.userId = newUserId;
    }
  }
  next(action);
};
