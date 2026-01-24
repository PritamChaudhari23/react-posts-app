import { createSlice } from '@reduxjs/toolkit';

const usersInitial = {
    loading: false,
    error: false,
    data: null
}

const usersSlice = createSlice({
    name: 'Users-Slice',
    initialState: usersInitial,
    reducers: {
        fetchUsersAction: (state) => {
            state.loading = true;
            state.error = false;
        },
        fetchUsersSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchUsersFailure: (state) => {
            state.loading = false;
            state.error = true;
        },
    }
})

export const {
    fetchUsersAction,
    fetchUsersSuccess,
    fetchUsersFailure
} = usersSlice.actions;

export default usersSlice.reducer;