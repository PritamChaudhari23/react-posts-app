import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas/rootSaga";
import { postsSlice } from "./slices/postsSlice";
import { commentsSlice } from "./slices/commentsSlice";
import { usersSlice } from "./slices/usersSlice";
import { appSlice } from "./slices/appSlice";

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
