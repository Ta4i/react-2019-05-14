import { normalizedUsers } from "../fixtures";
import { ADDED_NEW_REVIEW } from "../constants";

export default (usersState = normalizedUsers, action) => {
  switch (action.type) {
    case ADDED_NEW_REVIEW:
      const { userId: id, name } = action.payload;
      if (!id) return usersState;
      return [...usersState, { id, name }];
    default:
      return usersState;
  }
};
