import { createSlice } from "@reduxjs/toolkit";

// TO-DO: token is set to true to bypass auth and work on features. Once completed, set token to null.

const initialAuthState = {
  user: null,
  token: true,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },

    signup: (state) => {
      state.loading = true;
      state.error = null;
    },
    signupSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    signupFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  login,
  loginSuccess,
  loginFailure,
  logout,
  signup,
  signupSuccess,
  signupFailure,
} = authSlice.actions;

export { authSlice };
