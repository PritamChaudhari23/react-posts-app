import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_USERS, fetchUsersSuccess } from '../store/actions/usersActions';

function api() {
  return fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
    res.json()
  );
}

function* fetchUsersWorker() {
  const users = yield call(api);
  yield put(fetchUsersSuccess(users));
}

export default function* usersSaga() {
  yield takeLatest(FETCH_USERS, fetchUsersWorker);
}
