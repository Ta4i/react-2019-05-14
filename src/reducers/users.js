import { ADD_REVIEW, FAIL, LOAD_USERS, START, SUCCESS } from "../constants";
import { fromJS } from "immutable";

const initialState = {
  loaded: false,
  loading: false,
  error: null,
  entities: []
};

export default (usersState = fromJS(initialState), action) => {
  switch (action.type) {
    case LOAD_USERS + START: {
      return usersState.set("loading", true);
    }
    case LOAD_USERS + SUCCESS: {
      return usersState
        .set("entities", fromJS(action.response))
        .set("loading", false)
        .set("loaded", true);
    }
    case LOAD_USERS + FAIL: {
      return usersState
        .set("loading", false)
        .set("loaded", false)
        .set("error", action.error);
    }
    case ADD_REVIEW: {
      if (
        !usersState
          .get("entities")
          .find(user => user.get("id") === action.userId)
      ) {
        return usersState.update("entities", users => {
          return users.push({
            id: action.userId,
            name: action.payload.userName
          });
        });
      } else {
        return usersState;
      }
    }
    default:
      return usersState;
  }
};
