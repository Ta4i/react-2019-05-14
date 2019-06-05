import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers";
import generateId from "../middlewares/generate-id";
import provideUserId from "../middlewares/provide-user-id";
import api from "../middlewares/api";
import { composeWithDevTools } from "redux-devtools-extension";

const enhancer = composeWithDevTools(
  applyMiddleware(api, generateId, provideUserId)
);

const store = createStore(reducer, enhancer);

// dev mode
window.store = store;

export default store;
