import { SET_CURRENT_USER } from '../constants';

export default (userState = {}, action) => {
  if (action.type === SET_CURRENT_USER) {
    const { id, email, name } = action.payload;
    return {
      id,
      email,
      name: name && name.trim() ? name : userState.name
    };
  }
  return userState;
};
