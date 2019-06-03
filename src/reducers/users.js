import { normalizedUsers } from "../fixtures";
import { ADD_REVIEW } from "../constants";

export default (usersState = normalizedUsers, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW:
      return [
        ...usersState,
        {
          id: payload.userId,
          name: payload.name
        }
      ];
    default:
      return [...usersState];
  }
};
