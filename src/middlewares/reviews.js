import { ADD_REVIEW } from "./../constants/reviews";
import _ from "lodash";

import uuid from "uuid/v1";

export default store => next => action => {
  if (action.type === ADD_REVIEW) {
    let adjustedAction = {
      ...action,
      payload: { ...action.payload }
    };

    const { payload } = adjustedAction;
    const { userName } = payload;

    payload.id = uuid();

    let user = _.find(store.getState().users, u => u.name === userName);
    adjustedAction.payload.userId = user ? user.id : uuid(); // generate userId, will be inserted in reducer

    return next(adjustedAction);
  }
};
