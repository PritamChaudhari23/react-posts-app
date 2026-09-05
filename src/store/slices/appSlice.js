import { createSlice } from "@reduxjs/toolkit";

const initialAppState = {
  ui: {
    globalError: null,
  },
};

const appSlice = createSlice({
  name: "app",
  initialState: initialAppState,
  reducers: {
    setGlobalError: (state, action) => {
      state.ui.globalError = action.payload;
    },
    clearGlobalError: (state) => {
      state.ui.globalError = null;
    },
  },
});

export const { setGlobalError, clearGlobalError } = appSlice.actions;

export { appSlice };
