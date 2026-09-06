// store/commentsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    list: [],
  },
  reducers: {
    fetchComments: () => {},
    fetchCommentsSuccess: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { fetchComments, fetchCommentsSuccess } = commentsSlice.actions;
export default commentsSlice.reducer;
