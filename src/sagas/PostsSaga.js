import { call, put, takeEvery } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  fetchPostsAction,
  fetchPostsSuccess,
  fetchPostsFailure,
  createPostAction,
  createPostSuccess,
  createPostFailure,
  updatePostAction,
  updatePostFailure,
  updatePostSuccess,
  deletePostAction,
  deletePostFailure,
  deletePostSuccess,
} from "../slices/postsSlice";

import {
  fetchPostsAPI,
  createPostAPI,
  deletePostAPI,
  updatePostAPI,
} from "../network/postsapi";

//Worker
function* getPostsSaga() {
  try {
    const response = yield call(fetchPostsAPI);
    if (response.status === 200) {
      yield put(fetchPostsSuccess(response.data));
    } else {
      yield put(fetchPostsFailure());
    }
  } catch (ex) {
    console.log("error: ", ex);
    yield put(fetchPostsFailure());
  }
}

function* createPostSaga(action) {
  try {
    const response = yield call(createPostAPI, action.payload);
    if (response.status === 201) {
      yield put(createPostSuccess(response.data));
    } else {
      yield put(createPostFailure());
    }
  } catch (ex) {
    console.log("error: ", ex);
    yield put(createPostFailure());
  }
}

  function* updatePostSaga(action) {
  try {
    const response = yield call(updatePostAPI, action.payload);
    if (response.status === 200) {
      yield put(updatePostSuccess(response.data));
    } else {
      yield put(updatePostFailure());
    }
  } catch (ex) {
    console.log("error: ", ex);
    yield put(updatePostFailure());
  }
}

function* deletePostSaga(action) {
  try {
    const response = yield call(deletePostAPI, action.payload.id);
    if (response.status === 200) {
      yield put(deletePostSuccess(response.data));
    } else {
      yield put(deletePostFailure());
    }
  } catch (ex) {
    console.log("error: ", ex);
    yield put(deletePostFailure());
  }
}

//Watcher
export function* postsSagaWatcher() {
  yield takeEvery(fetchPostsAction, getPostsSaga);
  yield takeEvery(createPostAction, createPostSaga);
  yield takeEvery(updatePostAction, updatePostSaga);
  yield takeEvery(deletePostAction, deletePostSaga);
}
