import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_POSTS, fetchPostsSuccess } from '../store/actions/postsActions';

function api(userId) {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  ).then((res) => res.json());
}

function* fetchPostsWorker(action) {
  const posts = yield call(api, action.payload);
  yield put(fetchPostsSuccess(posts));
}

export default function* postsSaga() {
  yield takeLatest(FETCH_POSTS, fetchPostsWorker);
}
