import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchUsersAction,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "../slices/usersSlice";

import { fetchUsersAPI } from "../network/usersapi";

// Worker
function* fetchUsersSaga() {
  try {
    const response = yield call(fetchUsersAPI);
    if (response.status === 200) {
      yield put(fetchUsersSuccess(response.data));
    } else {
      yield put(
        fetchUsersFailure("Failed with status" + response.status)
      );
    }
  } catch (ex) {
    console.log("error: ", ex);
    yield put(fetchUsersFailure("Unknown error occured"));
  }
}

// Watcher
export function* usersSagaWatcher() {
  yield takeEvery(fetchUsersAction.type, fetchUsersSaga);
}
