import { call, put, takeLatest } from "redux-saga/effects";
import {
  login,
  loginSuccess,
  loginFailure,
  logout,
  signup,
  signupSuccess,
  signupFailure,
} from "../slices/authSlice";
import { login as loginApi, addUser } from "../network";

function* loginWorker(action) {
  const { username, password } = action.payload;
  try {
    const response = yield call(loginApi, username, password);
    localStorage.setItem("accessToken", response.accessToken);
    yield put(loginSuccess({ user: response, token: response.accessToken }));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

function* logoutWorker() {
  localStorage.removeItem("accessToken");
}

function* signupWorker(action) {
  try {
    const newUser = yield call(addUser, action.payload);
    yield put(signupSuccess(newUser));
  } catch (error) {
    yield put(signupFailure(error.message));
  }
}

export default function* authSaga() {
  yield takeLatest(login.type, loginWorker);
  yield takeLatest(logout.type, logoutWorker);
  yield takeLatest(signup.type, signupWorker);
}
