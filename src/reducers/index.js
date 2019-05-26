import { combineReducers } from 'redux';
import userReducer from './user';
import cartReducer from './cart';
import restaurantsReducer from './restaurants';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  restaurants: restaurantsReducer
});
