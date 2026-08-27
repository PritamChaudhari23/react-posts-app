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
      state.posts.loading = true;
      state.posts.error = null;
    },
    fetchPostsSuccess: (state, action) => {
      state.posts.loading = false;
      state.posts.list = action.payload;
    },
    fetchPostsFailure: (state, action) => {
      state.posts.loading = false;
      state.posts.error = action.payload;
    },
    setCurrentPostId: (state, action) => {
      state.currentPostId = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.search.query = action.payload;
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

const usersSlice = createSlice({
  name: "users",
  initialState: initialUsersState,
  reducers: {
    fetchUsers: (state) => {
      state.users.loading = true;
      state.users.error = null;
    },
    fetchUsersSuccess: (state, action) => {
      state.users.loading = false;
      state.users.byId = Object.fromEntries(
        action.payload.map((user) => [user.id, user]),
      );
    },
    fetchUsersFailure: (state, action) => {
      state.users.loading = false;
      state.users.error = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.currentUser.id = action.payload;
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
