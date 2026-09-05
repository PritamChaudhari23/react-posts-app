import { createSlice } from "@reduxjs/toolkit";

const initialPostsState = {
  posts: {
    list: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10,
    total: 0,
    hasMore: true,
  },

  currentPostId: null,

  search: {
    query: "",
    loading: false,
    error: null,
    isActive: false,
  },

  likedPostIds: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState: initialPostsState,
  reducers: {
    fetchPosts: (state) => {
      state.posts.loading = true;
      state.posts.error = null;
    },
    fetchPostsSuccess: (state, action) => {
      const { posts, total } = action.payload;
      state.posts.loading = false;
      state.posts.list = posts;
      state.posts.total = total;
      state.posts.hasMore = state.posts.page * state.posts.limit < total;
    },
    fetchPostsFailure: (state, action) => {
      state.posts.loading = false;
      state.posts.error = action.payload;
    },
    setPage: (state, action) => {
      state.posts.page = action.payload;
    },
    setCurrentPostId: (state, action) => {
      state.currentPostId = action.payload;
    },

    searchPosts: (state, action) => {
      state.search.query = action.payload;
      state.search.loading = true;
      state.search.error = null;
      state.search.isActive = true;
    },
    searchPostsSuccess: (state, action) => {
      state.search.loading = false;
      state.posts.list = action.payload;
    },
    searchPostsFailure: (state, action) => {
      state.search.loading = false;
      state.search.error = action.payload;
    },
    clearSearch: (state) => {
      state.search.query = "";
      state.search.isActive = false;
      state.search.error = null;
    },

    likePostOptimistic: (state, action) => {
      if (!state.likedPostIds.includes(action.payload)) {
        state.likedPostIds.push(action.payload);
      }
    },
    likePostRollback: (state, action) => {
      state.likedPostIds = state.likedPostIds.filter(
        (id) => id !== action.payload,
      );
    },
  },
});

export const {
  fetchPosts,
  fetchPostsSuccess,
  fetchPostsFailure,
  setPage,
  setCurrentPostId,
  searchPosts,
  searchPostsSuccess,
  searchPostsFailure,
  clearSearch,
  likePostOptimistic,
  likePostRollback,
} = postsSlice.actions;

export { postsSlice };
