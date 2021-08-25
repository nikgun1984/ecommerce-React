import { createStore, applyMiddleware } from "redux";
// handy to see which actions are fired etc
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
