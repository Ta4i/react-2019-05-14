import { combineReducers } from 'redux';
import i18nReducer from './i18n';
import userReducer from './user';
import cartReducer from './cart';
import usersReduser from './users';
import dishesReduser from './dishes';
import reviewsReduser from './reviews';
import restaurantsReducer from './restaurants';

export default combineReducers({
  i18n: i18nReducer,
  user: userReducer,
  cart: cartReducer,
  users: usersReduser,
  dishes: dishesReduser,
  reviews: reviewsReduser,
  restaurants: restaurantsReducer
});
