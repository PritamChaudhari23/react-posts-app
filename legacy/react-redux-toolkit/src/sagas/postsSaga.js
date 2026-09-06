// sagas/postsSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchPosts, fetchPostsSuccess } from '../store/postsSlice';

const api = (userId) =>
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then(
    (res) => res.json()
  );

function* fetchPostsWorker(action) {
  const posts = yield call(api, action.payload);
  yield put(fetchPostsSuccess(posts));
}

export default function* postsSaga() {
  yield takeLatest(fetchPosts.type, fetchPostsWorker);
}
