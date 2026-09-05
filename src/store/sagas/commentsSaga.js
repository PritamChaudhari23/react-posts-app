import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchComments,
  fetchCommentsSuccess,
  fetchCommentsFailure,
} from "../slices/commentsSlice";
import { getPostComments } from "../network";

function* fetchCommentsWorker(action) {
  const postId = action.payload;
  try {
    const comments = yield call(getPostComments, postId);
    yield put(fetchCommentsSuccess(comments));
  } catch (error) {
    yield put(fetchCommentsFailure(error.message));
  }
}

export default function* commentsSaga() {
  yield takeLatest(fetchComments.type, fetchCommentsWorker);
}
