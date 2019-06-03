import { GET_CURRENT_USER, SET_CURRENT_USER } from '../constants';

export const getCurrentUser = () => ({
  type: GET_CURRENT_USER
});

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});
