import uuidv1 from 'uuid/v1';
import { CREATE_USER, CREATE_REVIEW } from '../constants';

const modifier = store => next => action => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_USER:
    case CREATE_REVIEW: {
      payload.id = payload.id ? payload.id : uuidv1();
      console.log('modifier payload:', payload);
      break;
    }
    default:
      break;
  }
  const result = next(action);
  return result;
};

export default modifier;
