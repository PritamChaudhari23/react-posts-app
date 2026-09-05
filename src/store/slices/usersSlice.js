import { createSlice } from "@reduxjs/toolkit";

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
    fetchUserById: (state) => {
      state.users.loading = true;
      state.users.error = null;
    },
    fetchUserByIdSuccess: (state, action) => {
      state.users.loading = false;
      state.users.byId[action.payload.id] = action.payload;
    },
    fetchUserByIdFailure: (state, action) => {
      state.users.loading = false;
      state.users.error = action.payload;
    },
  },
});

export const {
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersFailure,
  setCurrentUser,
} = usersSlice.actions;

export { usersSlice };
