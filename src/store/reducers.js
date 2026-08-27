import { combineReducers } from "@reduxjs/toolkit";
import postsReducer from "../temp/slices/postsSlice";
import commentsReducer from "../temp/slices/commentsSlice";
import usersReducer from "../temp/slices/usersSlice";

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
