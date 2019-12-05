import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';

import { combinedReducers, rootEpic } from "./reducers";

const reduxObservableMiddleware = createEpicMiddleware();


export default function configureStore() {
  const store = createStore(
    combinedReducers,
    applyMiddleware(reduxObservableMiddleware)
  );

  reduxObservableMiddleware.run(rootEpic);

  return store;
}