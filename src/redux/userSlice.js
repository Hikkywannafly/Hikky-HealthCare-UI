import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    currentUser: null,
    isFetching: false,
    error: false,
    errorData: null,
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        registerStart: (state) => {
            state.isFetching = true;
        },
        registerSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
            state.error = false;
            state.errorData = null;
        },
        registerFailed: (state, action) => {
            state.isFetching = false;
            state.error = true;
            state.errorData = action.payload;
            state.currentUser = null;
        }
    }
});
export const {
    registerStart,
    registerFailed,
    registerSuccess
} = userSlice.actions;
export default userSlice.reducer;