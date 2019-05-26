import { combineReducers } from "redux";
import counterReducer from "./counter";
import cartReducer from "./cart";
import restaurantsReducer from "./restaurants";
import { orderingDishesReducer } from "./ordering-dishes";

export default combineReducers({
  count: counterReducer,
  restaurants: restaurantsReducer,
  cart: cartReducer,
  orderingDishes: orderingDishesReducer
});
