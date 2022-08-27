import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    currentUser: null,
    isFetching: false,
    error: false,
    errorData: null,
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
            state.error = false;
        },
        loginFailed: (state, action) => {
            state.isFetching = false;
            state.error = true;
            state.errorData = action.payload;
        }
    }
})
export const {
    loginStart,
    loginFailed,
    loginSuccess
} = authSlice.actions;
export default authSlice.reducer;