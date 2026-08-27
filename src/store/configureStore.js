import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./appSaga";
import { postsSlice, commentsSlice, usersSlice, appSlice } from "./appSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    comments: commentsSlice.reducer,
    users: usersSlice.reducer,
    app: appSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
