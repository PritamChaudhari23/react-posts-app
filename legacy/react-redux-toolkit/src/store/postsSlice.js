// store/postsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    fetchPosts: (state, action) => {
      state.loading = true;
    },
    fetchPostsSuccess: (state, action) => {
      state.loading = false;
      state.list = action.payload;
    },
  },
});

export const { fetchPosts, fetchPostsSuccess } = postsSlice.actions;
export default postsSlice.reducer;
