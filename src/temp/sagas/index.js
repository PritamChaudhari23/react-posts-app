import { all } from "redux-saga/effects";
import { postsSagaWatcher } from "./PostsSaga";
import { commentSagaWatcher } from "./CommentsSaga";
import { usersSagaWatcher } from "./UsersSaga";

//root saga
export default function* rootSaga() {
  yield all([postsSagaWatcher(), commentSagaWatcher(), usersSagaWatcher()]);
}
