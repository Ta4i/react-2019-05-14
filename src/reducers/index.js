import { combineReducers } from "redux";
import counterReducer from "./counter";
import cartReducer from "./cart";
import restaurantsReducer from "./restaurants";
import dishesReducer from "./dishes";
import reviewsState from "./reviews";
import usersState from "./users";

export default combineReducers({
  count: counterReducer,
  restaurants: restaurantsReducer,
  cart: cartReducer,
  dishes: dishesReducer,
  reviews: reviewsState,
  users: usersState
});
