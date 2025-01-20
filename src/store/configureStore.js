import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import counter from "./counter";
import logger from "./middleware/logger";
import photos from "./photos";
// counter = () => 0;
const middleware = [...getDefaultMiddleware(), logger];

const reducer = combineReducers({ counter, photos });

const store = configureStore({ reducer, middleware });

export default store;
