import { createStore } from "redux";
import reducer from "../reducers";
//const store = createStore(reducer);

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// dev mode
window.store = store;

export default store;
