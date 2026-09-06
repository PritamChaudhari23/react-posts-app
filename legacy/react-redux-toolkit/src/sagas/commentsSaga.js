// sagas/commentsSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchComments, fetchCommentsSuccess } from '../store/commentsSlice';

const api = (postId) =>
  fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`).then(
    (res) => res.json()
  );

function* fetchCommentsWorker(action) {
  const comments = yield call(api, action.payload);
  yield put(fetchCommentsSuccess(comments));
}

export default function* commentsSaga() {
  yield takeLatest(fetchComments.type, fetchCommentsWorker);
}
