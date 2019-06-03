import { GET_CURRENT_USER, SET_CURRENT_USER } from '../constants';

export default (userState = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_USER: {
      const { id, email, name } = action.payload;
      return {
        id,
        email,
        name: name && name.trim() ? name : userState.name
      };
    }
    case GET_CURRENT_USER:
    default: {
      return userState;
    }
  }
};
