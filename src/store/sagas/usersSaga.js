import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "../slices/usersSlice";
import { getUsers } from "../network";

function* fetchUsersWorker() {
  try {
    const users = yield call(getUsers);
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

export default function* usersSaga() {
  yield takeLatest(fetchUsers.type, fetchUsersWorker);
}
