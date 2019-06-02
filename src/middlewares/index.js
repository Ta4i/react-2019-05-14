import uuid from "uuid";
import { ADD_REVIEW } from "../constants";

export default store => next => action => {
  if (action.type === ADD_REVIEW) {
    const users = store.getState().users;
    action.payload.id = uuid.v1();
    const reviewer = users.find(user => user.name === action.payload.name);
    if (!reviewer) action.payload.userId = uuid.v1();
    else action.payload.userId = reviewer.id;
  }
  next(action);
};
