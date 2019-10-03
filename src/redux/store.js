import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import weatherReducer from "./reducers/weatherReducer";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const reducers = combineReducers({
  weatherReducer
});

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducers, {}, enhancer);

export default store;
