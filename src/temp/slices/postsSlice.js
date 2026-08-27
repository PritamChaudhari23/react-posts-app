import { createSlice } from '@reduxjs/toolkit';

const postsInitial = {
    loading: false,
    error: false,
    data: null
}

const postsSlice = createSlice({
    name: 'Posts-Slice',
    initialState: postsInitial,
    reducers: {
        fetchPostsAction: (state) => {
            state.loading = true;
            state.error = false;
        },
        fetchPostsSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload
        },
        fetchPostsFailure: (state) => {
            state.loading = false;
            state.error = true;
        },

        createPostAction: (state, action) => {
            state.loading = true;
            state.error = false;
            state.data = action.payload;
        },
        createPostSuccess: (state) => {
            state.loading = false;
            state.error = false;
        },
        createPostFailure: (state) => {
            state.loading = false;
            state.error = true;
        },

        updatePostAction: (state, action) => {
            state.loading = true;
            state.error = false;
            state.data = action.payload
        },
        updatePostSuccess: (state) => {
            state.loading = false;
            state.error = false;
        },
        updatePostFailure: (state) => {
            state.loading = false;
            state.error = true;
        },

        deletePostAction: (state, action) => {
            state.loading = true;
            state.error = false;
            state.data = action.payload;
        },
        deletePostSuccess: (state) => {
            state.loading = false;
            state.error = false;
        },
        deletePostFailure: (state) => {
            state.loading = false;
            state.error = true;
        },
    }
})

export const {
    fetchPostsAction,
    fetchPostsSuccess,
    fetchPostsFailure,
    createPostAction,
    createPostSuccess,
    createPostFailure,
    updatePostAction,
    updatePostFailure,
    updatePostSuccess,
    deletePostAction,
    deletePostFailure,
    deletePostSuccess
} = postsSlice.actions;

export default postsSlice.reducer;