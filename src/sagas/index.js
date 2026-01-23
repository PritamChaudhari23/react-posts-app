import { all } from "redux-saga/effects";
import { postsSagaWatcher } from "./PostsSaga";
import { commentSagaWatcher } from "./CommentsSaga";

//root saga
export default function* rootSaga() {
  yield all([postsSagaWatcher(), commentSagaWatcher()]);
}
