// sagas/usersSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchUsers, fetchUsersSuccess } from '../store/usersSlice';

const api = () =>
  fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());

function* fetchUsersWorker() {
  const users = yield call(api);
  yield put(fetchUsersSuccess(users));
}

export default function* usersSaga() {
  yield takeLatest(fetchUsers.type, fetchUsersWorker);
}
