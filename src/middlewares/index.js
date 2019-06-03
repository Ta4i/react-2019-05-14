import { ADD_REVIEW } from "../constants";
import uuid from "uuid/v1";
import { createUserIdSelector } from "../selectors";

export default store => next => action => {
  console.log("before", store.getState());
  console.log("action", action);

  let newAction;

  switch (action.type) {
    case ADD_REVIEW:
      const selector = createUserIdSelector();
      const id = uuid(Date.now());
      const userId =
        selector(store.getState(), action.payload) || uuid(Date.now());

      newAction = {
        ...action,
        payload: {
          ...action.payload,
          id: id,
          userId: userId
        }
      };
      break;
    default:
      newAction = {
        ...action
      };
      break;
  }
  next(newAction);
  console.log("after", store.getState());
};
