import { createSlice } from "@reduxjs/toolkit";

const initialCommentsState = {
  comments: {
    list: [],
    loading: false,
    error: null,
  },
};

const commentsSlice = createSlice({
  name: "comments",
  initialState: initialCommentsState,
  reducers: {
    fetchComments: (state) => {
      state.comments.loading = true;
      state.comments.error = null;
    },
    fetchCommentsSuccess: (state, action) => {
      state.comments.loading = false;
      state.comments.list = action.payload;
    },
    fetchCommentsFailure: (state, action) => {
      state.comments.loading = false;
      state.comments.error = action.payload;
    },
  },
});

export const { fetchComments, fetchCommentsSuccess, fetchCommentsFailure } =
  commentsSlice.actions;

export { commentsSlice };
