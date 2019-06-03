import { ADD_REVIEW } from "../constants";
import uuid from "uuid/v1";

export default store => next => action => {
  console.log("before", store.getState());
  console.log("action", action);

  let newAction;

  switch (action.type) {
    case ADD_REVIEW:
      newAction = {
        ...action,
        id: uuid(Date.now()),
        userId: uuid(Date.now())
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
