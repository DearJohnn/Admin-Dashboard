import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./login/authSlice";
import tenantSlice from "./tenant/tenantSlice";
import buildingSlice from "./building/buildingSlice";

export const store = configureStore({
    reducer:{
        authSlice,
        tenantSlice,
        buildingSlice
    }
})