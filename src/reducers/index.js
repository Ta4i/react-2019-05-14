import { combineReducers } from "redux";
import counter from "./counter";
import cart from "./cart";
import restaurants from "./restaurants";
import dishes from "./dishes";
import reviews from "./reviews";

export default combineReducers({
  counter,
  restaurants,
  cart,
  dishes,
  reviews
});
