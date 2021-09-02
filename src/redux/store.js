import { createStore, applyMiddleware } from "redux";
// handy to see which actions are fired etc
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// new provider will wrap our application
export const persistor = persistStore(store);
