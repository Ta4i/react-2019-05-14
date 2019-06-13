import { FAIL, START, SUCCESS } from '../constants';

export default store => next => action => {
  const { callAPI, params, ...rest } = action;
  if (callAPI) {
    next({
      type: action.type + START
    });
    const URL = params ? callAPI + params : callAPI;
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        next({
          ...rest,
          type: action.type + SUCCESS,
          response: data
        });
      })
      .catch(e => {
        next({
          ...rest,
          type: action.type + FAIL,
          error: e
        });
      });
  } else {
    next(rest);
  }
};
