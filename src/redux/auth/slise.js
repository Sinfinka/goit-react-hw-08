import { createSlice } from "@reduxjs/toolkit";
import { logIn, register } from "./operations";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
        loading: false,
        error: null,
    },
    extraReducers: builder => builder.addCase(register.pending, (state) => {
        state.error = false;
        state.loading = true;
      }).addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      }).addCase(register.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }).addCase(logIn.pending, (state) => {
        state.error = false;
        state.loading = true;
      }).addCase(logIn.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      }).addCase(logIn.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })});

export default authSlice.reducer

