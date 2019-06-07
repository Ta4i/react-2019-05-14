import { CREATE_USER, FAIL, LOAD_USERS, GET_USER, START, SUCCESS } from '../constants';
import { fromJS } from 'immutable';

const initialState = {
  loaded: false,
  loading: false,
  error: null,
  entities: []
};

export default (usersState = fromJS(initialState), action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_USERS + START: {
      return usersState.set('loading', true);
    }
    case LOAD_USERS + SUCCESS: {
      return usersState
        .set('entities', fromJS(action.response))
        .set('loading', false)
        .set('loaded', true);
    }
    case LOAD_USERS + FAIL: {
      return usersState
        .set('loading', false)
        .set('loaded', false)
        .set('error', action.error);
    }
    case CREATE_USER: {
      return usersState.updateIn(['entities'], users => users.push(payload)).toJS();
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
