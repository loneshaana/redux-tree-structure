import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
const middle = store => next => action => {
  next(action);
  console.log(store.getState());
};
const enhancers = applyMiddleware(middle);
const configureStore = initialState => {
  return createStore(reducer, initialState, enhancers);
};
export default configureStore;
