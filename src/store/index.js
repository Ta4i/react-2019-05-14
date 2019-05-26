import { createStore } from "redux";
import reducer from "../reducers";
const store = createStore(reducer);

// dev mode
window.store = store;

console.log(store.getState());

export default store;

store.subscribe(() => {
  console.log(store.getState());
});
