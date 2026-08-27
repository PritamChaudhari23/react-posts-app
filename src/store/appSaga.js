import { all, call, put, takeLatest } from "redux-saga/effects";

function appSaga() {
  // Saga implementation
}

export default function* rootSaga() {
  yield all([appSaga()]);
}
