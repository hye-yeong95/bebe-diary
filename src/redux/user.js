import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: { value: {name: '', id: ''}},
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
    },
});



export const { login, logout } = userSlice.actions;

export default userSlice.reducer;