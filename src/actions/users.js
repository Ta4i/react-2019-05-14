import { CREATE_USER, GET_USER, LOAD_USERS } from '../constants';

export const loadUsers = () => ({
  type: LOAD_USERS,
  callAPI: 'http://localhost:3001/api/users'
});

export const createUser = user => ({
  type: CREATE_USER,
  payload: user
});

export const getUser = user => ({
  type: GET_USER,
  payload: user
});
