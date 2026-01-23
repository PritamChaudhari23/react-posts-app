import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import createReducer from './reducers';
import rootSaga from "../sagas/index";

export default function configureAppStore() {

  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];

  const store = configureStore({
    reducer: createReducer(),
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: false,
        serializableCheck: false,
      }).concat(middlewares),
    preloadedState: {},
    devTools: process.env.NODE_ENV !== 'production',
  });

  sagaMiddleware.run(rootSaga);
  return store;
}