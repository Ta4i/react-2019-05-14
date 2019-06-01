import { normalizedDishes, normalizedReviews, normalizedUsers } from '../fixtures';
import { FETCH_DISH } from '../constants';

const dataFetcher = store => next => action => {
  switch (action.type) {
    case FETCH_DISH: {
      const { id } = action.payload;
      store.dispatch(normalizedDishes.find(dish => dish.id === id));
      break;
    }
    default: {
      return next(action);
    }
  }
};

export default dataFetcher;
