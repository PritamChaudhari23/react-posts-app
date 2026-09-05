import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchPosts, fetchPostsSuccess, fetchPostsFailure } from "./appSlice";
import { getPosts } from "./network";

function* fetchPostsWorker() {
  try {
    const posts = yield call(getPosts);
    yield put(fetchPostsSuccess(posts));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

function* fetchPostsWatcher() {
  yield takeLatest(fetchPosts.type, fetchPostsWorker);
}

export default function* rootSaga() {
  yield all([fetchPostsWatcher()]);
}
