import { normalizedUsers } from '../fixtures';
import { CREATE_USER, GET_USER } from '../constants';

export default (usersState = normalizedUsers, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_USER: {
      usersState.push(payload);
      return usersState;
    }
    case GET_USER: {
      const user = usersState.find(item => item.id === payload.id);
      if (!user) {
        // TODO: if not found throw exception
      }
      return usersState;
    }
    default: {
      return usersState;
    }
  }
};
