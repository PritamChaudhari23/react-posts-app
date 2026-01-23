import { combineReducers } from "@reduxjs/toolkit";
import postsReducer from "../slices/postsSlice";
import commentsReducer from "../slices/commentsSlice";
import usersReducer from "../slices/usersSlice";

const reducerSlices = {
  posts: postsReducer,
  comments: commentsReducer,
  users: usersReducer,
};

export let rootReducer = combineReducers({ ...reducerSlices });

export default function createReducer() {
  const rootReducer = combineReducers({ ...reducerSlices });
  return rootReducer;
}
