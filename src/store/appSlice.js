import { createSlice } from "@reduxjs/toolkit";

const initialPostsState = {
  posts: {
    list: [],
    loading: false,
    error: null,
  },

  currentPostId: null,

  search: {
    query: "",
    loading: false,
  },

  likedPostIds: [],
};

const initialCommentsState = {
  comments: {
    list: [],
    loading: false,
    error: null,
  },
};

const initialUsersState = {
  users: {
    byId: {},
    loading: false,
    error: null,
  },
  currentUser: {
    id: null,
  },
};

const initialAppState = {
  ui: {
    globalError: null,
  },
};

const postsSlice = createSlice({
  name: "posts",
  initialState: initialPostsState,
  reducers: {
    fetchPosts: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPostsSuccess: (state, action) => {
      state.loading = false;
      state.list = action.payload;
    },
    fetchPostsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const commentsSlice = createSlice({
  name: "comments",
  initialState: initialCommentsState,
  reducers: {
    fetchComments: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCommentsSuccess: (state, action) => {
      state.loading = false;
      state.list = action.payload;
    },
    fetchCommentsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const usersSlice = createSlice({
  name: "users",
  initialState: initialUsersState,
  reducers: {
    fetchUsers: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUsersSuccess: (state, action) => {
      state.loading = false;
      state.list = action.payload;
    },
    fetchUsersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const appSlice = createSlice({
  name: "app",
  initialState: initialAppState,
  reducers: {
    setGlobalError: (state, action) => {
      state.ui.globalError = action.payload;
    },
  },
});

export { postsSlice, commentsSlice, usersSlice, appSlice };
