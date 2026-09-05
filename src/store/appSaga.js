import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { fetchPosts, fetchPostsSuccess, fetchPostsFailure } from "./appSlice";
import { getPosts } from "./network";

const selectPagination = (state) => state.posts.posts;

function* fetchPostsWorker() {
  try {
    const { page, limit } = yield select(selectPagination);
    const skip = (page - 1) * limit;
    const { posts, total } = yield call(getPosts, limit, skip);
    yield put(fetchPostsSuccess({ posts, total }));
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
