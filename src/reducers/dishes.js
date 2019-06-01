import { normalizedDishes } from '../fixtures';
import { FETCH_DISH } from '../constants';

const defaultState = normalizedDishes;

export default (dishesState = defaultState, action) => {
  switch (action.type) {
    case FETCH_DISH: {
      const { id } = action.payload;
      return normalizedDishes.find(dish => dish.id === id);
    }
    default: {
      return dishesState;
    }
  }
};
