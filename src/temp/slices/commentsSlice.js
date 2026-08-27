import { createSlice } from "@reduxjs/toolkit";

const commentsInitial = {
  loading: false,
  error: false,
  data: null,
};

const commentsSlice = createSlice({
  name: "Comments-Slice",
  initialState: commentsInitial,
  reducers: {
    fetchCommentForPostAction: (state, action) => {
      state.loading = true;
      state.error = false;
      state.data = action.payload;
    },
    fetchCommentForPostSuccess: (state, action) => {
      state.loading = false;
      state.error = false;
      state.data = action.payload;
    },
    fetchCommentForPostFailure: (state, action) => {
      state.loading = false;
      state.error = true;
      state.data = action.payload;
    },
  },
});

export const {
  fetchCommentForPostAction,
  fetchCommentForPostSuccess,
  fetchCommentForPostFailure,
} = commentsSlice.actions;

export default commentsSlice.reducer;
