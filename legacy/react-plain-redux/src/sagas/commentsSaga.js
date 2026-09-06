import { call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_COMMENTS,
  fetchCommentsSuccess,
} from '../store/actions/commentsActions';

function api(postId) {
  return fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  ).then((res) => res.json());
}

function* fetchCommentsWorker(action) {
  const comments = yield call(api, action.payload);
  yield put(fetchCommentsSuccess(comments));
}

export default function* commentsSaga() {
  yield takeLatest(FETCH_COMMENTS, fetchCommentsWorker);
}
