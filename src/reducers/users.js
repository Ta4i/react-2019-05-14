import { ADD_REVIEW } from "../constants";
import {
  LOAD_USERS_START,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_FAIL
} from "../constants/users";
import { fromJS } from "immutable";

const initialState = fromJS({
  isLoading: false,
  isLoaded: false,
  entities: [],
  error: null
});

export default (usersState = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS_START: {
      return usersState
        .set("isLoading", true)
        .set("isLoaded", false)
        .set("error", null);
    }
    case LOAD_USERS_SUCCESS: {
      return usersState
        .set("isLoading", false)
        .set("isLoaded", true)
        .set("entities", fromJS(action.response));
    }
    case LOAD_USERS_FAIL: {
      return usersState
        .set("isLoading", false)
        .set("isLoaded", false)
        .set("error", action.error);
    }
    case ADD_REVIEW: {
      if (!usersState.get("entities").find(user => user.id === action.userId)) {
        return usersState.update("entities", e =>
          e.push({
            id: action.userId,
            name: action.payload.userName
          })
        );
      }

      return usersState;
    }
    default:
      return usersState;
  }
};
