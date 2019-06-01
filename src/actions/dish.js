import { FETCH_DISH } from '../constants';

export const getDish = id => ({
  type: FETCH_DISH,
  payload: {
    id
  }
});
