import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./login/authSlice";
import tenantSlice from "./tenant/tenantSlice";

export const store = configureStore({
    reducer:{
        authSlice,
        tenantSlice
    }
})