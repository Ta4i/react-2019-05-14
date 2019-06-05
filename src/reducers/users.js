import { normalizedUsers } from "../fixtures";
import { ADD_REVIEW, LOAD_USERS, FAIL, SUCCESS } from "../constants";

const initialState = {
  loaded: false,
  error: null,
  entities: []
};

export default (usersState = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      if (!usersState.entities.find(user => user.id === action.userId)) {
        return {
          ...usersState,
          entities: [
            ...usersState.entities,
            { id: action.userId, name: action.payload.userName }
          ]
        };

        // id: action.userId,
        // name: action.payload.userName
      } else {
        return usersState;
      }
    }

    case LOAD_USERS + SUCCESS: {
      return {
        loaded: true,
        error: null,
        entities: action.response
      };
    }
    case LOAD_USERS + FAIL: {
      return {
        loaded: false,
        error: action.error,
        entities: []
      };
    }
    default:
      return usersState;
  }
};
