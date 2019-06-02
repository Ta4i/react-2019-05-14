import { normalizedUsers } from "../fixtures";
import { ADD_USER } from "./../constants/users";

export default (state = normalizedUsers, action) => {
  switch (action.type) {
    case ADD_USER: {
      let review = action.payload;
      return [...state, review];
    }
    default:
      return state;
  }
};
