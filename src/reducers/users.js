import { ADD_REVIEW, LOAD_USERS, START, SUCCESS, FAIL } from "../constants";

const initialState = {
  loaded: false,
  loading: false,
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
            {
              id: action.userId,
              name: action.payload.userName
            }
          ]
        };
      } else {
        return usersState;
      }
    }

    case LOAD_USERS + START: {
      return {
        ...usersState,
        loading: true
      };
    }
    case LOAD_USERS + SUCCESS: {
      return {
        ...usersState,
        entities: action.response,
        loading: false,
        loaded: true
      };
    }
    case LOAD_USERS + FAIL: {
      return {
        ...usersState,
        error: action.error,
        loading: false,
        loaded: false
      };
    }

    default:
      return usersState;
  }
};
