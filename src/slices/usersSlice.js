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
        fetchUsers: (state) => {
            state.loading = true;
            state.error = false;
        },
        fetchUsersSuccess: () => {},
        fetchUsersFailure: (state) => {
            state.loading = false;
            state.error = true;
        },
    }
})

export const {
    fetchUsers,
    fetchUsersSuccess,
    fetchUsersFailure
} = usersSlice.actions;

export default usersSlice.reducer;