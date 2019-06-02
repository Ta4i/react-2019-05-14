export let logger = store => next => action => {
  // console.log("before", store.getState());
  // console.log("action", action);
  next(action);
  // console.log("after", store.getState());
};

export let generateId = store => next => action => {
  // console.log("before", store.getState());
  // console.log("action", action);
  next(action);
  // console.log("after", store.getState());
};
