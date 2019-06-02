import { normalizedUsers } from '../fixtures';
import { CREATE_USER, GET_USER } from '../constants';

export default (usersState = normalizedUsers, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_USER: {
      let newUser = usersState.find(item => item.id === payload.id);
      console.log('NewUser: ', newUser);
      if (newUser) {
        newUser = payload;
      } else {
        usersState.push(payload);
      }
      return usersState;
    }
    case GET_USER: {
      return usersState.find(item => item.id === payload.id);
    }
    default: {
      return usersState;
    }
  }
};
