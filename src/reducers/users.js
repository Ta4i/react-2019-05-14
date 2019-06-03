import { normalizedUsers } from "../fixtures";
import { ADD_REVIEW } from "../constants";

export default (usersState = normalizedUsers, action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      return action.payload.result.users;
    }

    default:
      return usersState;
  }
};
