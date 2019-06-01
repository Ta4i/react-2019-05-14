import { combineReducers } from 'redux';
import userReducer from './user';
import cartReducer from './cart';
import usersReduser from './users';
import dishesReduser from './dishes';
import reviewsReduser from './reviews';
import restaurantsReducer from './restaurants';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  users: usersReduser,
  dishes: dishesReduser,
  reviews: reviewsReduser,
  restaurants: restaurantsReducer
});
