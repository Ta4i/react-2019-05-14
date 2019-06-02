import { CREATE_USER, GET_USER, SET_CURRENT_USER } from '../constants';

export const createUser = user => ({
  type: CREATE_USER,
  payload: user
});

export const getUser = id => ({
  type: GET_USER,
  payload: id
});

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});
