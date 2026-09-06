// store/rootSaga.js
import { all } from 'redux-saga/effects';
import usersSaga from '../sagas/usersSaga';
import postsSaga from '../sagas/postsSaga';
import commentsSaga from '../sagas/commentsSaga';

export default function* rootSaga() {
  yield all([usersSaga(), postsSaga(), commentsSaga()]);
}
