import { CREATE_USER, GET_USER } from '../constants';

export const createUser = user => ({
  type: CREATE_USER,
  payload: user
});

export const getUser = user => ({
  type: GET_USER,
  payload: user
});
