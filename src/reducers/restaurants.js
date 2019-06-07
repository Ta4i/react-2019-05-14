import { FAIL, LOAD_RESTAURANTS, START, SUCCESS, ADD_REVIEW_TO_RESTAURANT } from '../constants';
import { fromJS } from 'immutable';

const initialState = {
  loaded: false,
  loading: false,
  error: null,
  entities: []
};

export default (restaurantsState = fromJS(initialState), action) => {
  switch (action.type) {
    case LOAD_RESTAURANTS + START: {
      return restaurantsState.set('loading', true);
    }
    case LOAD_RESTAURANTS + SUCCESS: {
      return restaurantsState
        .set('entities', fromJS(action.response))
        .set('loading', false)
        .set('loaded', true);
    }
    case LOAD_RESTAURANTS + FAIL: {
      return restaurantsState
        .set('loading', false)
        .set('loaded', false)
        .set('error', action.error);
    }
    case ADD_REVIEW_TO_RESTAURANT: {
      const { id, reviewId } = action.payload;
      const restaurant = restaurantsState.find(item => item.id === id);
      if (restaurant) {
        restaurant.reviews.push(reviewId);
      }
    }
    default: {
      return restaurantsState;
    }
  }
};
