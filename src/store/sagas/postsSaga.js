import { call, put, select, takeLatest, delay } from "redux-saga/effects";
import {
  fetchPosts,
  fetchPostsSuccess,
  fetchPostsFailure,
  searchPosts,
  searchPostsSuccess,
  searchPostsFailure,
} from "../slices/postsSlice";
import { getPosts, searchPosts as searchPostsApi } from "../network";

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

function* searchPostsWorker(action) {
  const query = action.payload;

  yield delay(400);

  if (!query.trim()) {
    return;
  }

  try {
    const posts = yield call(searchPostsApi, query);
    yield put(searchPostsSuccess(posts));
  } catch (error) {
    yield put(searchPostsFailure(error.message));
  }
}

export default function* postsSaga() {
  yield takeLatest(fetchPosts.type, fetchPostsWorker);
  yield takeLatest(searchPosts.type, searchPostsWorker);
}
