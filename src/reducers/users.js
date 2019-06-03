import { normalizedUsers } from "../fixtures";
import { ADD_REVIEW } from "../constants";

export default (usersState = normalizedUsers, action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      const newUsersState = [...usersState];
      const reviewer = usersState.find(
        user => user.name === action.payload.name
      );
      if (!reviewer)
        newUsersState.push({
          id: action.payload.userId,
          name: action.payload.userName
        });
      return newUsersState;
    }
    default:
      return usersState;
  }
};
