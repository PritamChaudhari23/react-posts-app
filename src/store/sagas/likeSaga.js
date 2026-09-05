import { call, put, takeLatest } from "redux-saga/effects";
import {
  likePost,
  likePostOptimistic,
  likePostRollback,
} from "../slices/postsSlice";
import { updatePost } from "../network";

function* likePostWorker(action) {
  const postId = action.payload;

  yield put(likePostOptimistic(postId));

  try {
    yield call(updatePost, postId, { liked: true });
  } catch (error) {
    yield put(likePostRollback(postId));
  }
}

export default function* likeSaga() {
  yield takeLatest(likePost.type, likePostWorker);
}
