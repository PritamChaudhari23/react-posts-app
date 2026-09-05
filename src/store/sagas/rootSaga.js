import { all } from "redux-saga/effects";
import postsSaga from "./postsSaga";
import commentsSaga from "./commentsSaga";
import usersSaga from "./usersSaga";
import postDetailsSaga from "./postDetailsSaga";
import likeSaga from "./likeSaga";

export default function* rootSaga() {
  yield all([
    postsSaga(),
    commentsSaga(),
    usersSaga(),
    postDetailsSaga(),
    likeSaga(),
  ]);
}
