import { all, call, put, takeLatest } from "redux-saga/effects";
import { setCurrentPostId } from "../slices/postsSlice";
import {
  fetchComments,
  fetchCommentsSuccess,
  fetchCommentsFailure,
} from "../slices/commentsSlice";
import {
  fetchUserById,
  fetchUserByIdSuccess,
  fetchUserByIdFailure,
} from "../slices/usersSlice";
import { getPostComments, getUserById } from "../network";

function* loadPostDetailWorker(action) {
  const { postId, authorId } = action.payload;

  try {
    const [comments, author] = yield all([
      call(getPostComments, postId),
      call(getUserById, authorId),
    ]);
    yield put(fetchCommentsSuccess(comments));
    yield put(fetchUserByIdSuccess(author));
  } catch (error) {
    yield put(fetchCommentsFailure(error.message));
    yield put(fetchUserByIdFailure(error.message));
  }
}

export default function* postDetailsSaga() {
  yield takeLatest(setCurrentPostId.type, loadPostDetailWorker);
}
