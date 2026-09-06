import { all } from 'redux-saga/effects';
import usersSaga from './usersSaga';
import postsSaga from './postsSaga';
import commentsSaga from './commentsSaga';

export default function* rootSaga() {
  yield all([usersSaga(), postsSaga(), commentsSaga()]);
}
