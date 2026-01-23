import { call, put, takeEvery } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";

import {
  fetchCommentForPostAction,
  fetchCommentForPostSuccess,
  fetchCommentForPostFailure,
} from "../slices/commentsSlice";

import { fetchCommentForPostAPI } from "../network/commentsapi";

// Worker
function* fetchCommentForPostSaga(action) {
  try {
    const response = yield call(fetchCommentForPostAPI, action.payload);
    if (response.status === 200) {
      yield put(fetchCommentForPostSuccess(response.data));
    } else {
      yield put(
        fetchCommentForPostFailure("Failed with status" + response.status)
      );
    }
  } catch (ex) {
    console.log("error: ", ex);
    yield put(fetchCommentForPostFailure("Unknown error occured"));
  }
}

// Watcher
export function* commentSagaWatcher() {
  yield takeEvery(fetchCommentForPostAction.type, fetchCommentForPostSaga);
}
