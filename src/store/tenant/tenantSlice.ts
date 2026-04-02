import { createSlice } from "@reduxjs/toolkit";

export const tenantSlice=createSlice({
    name:"tenant",
    initialState:{
        tenantData:{}
    },
    reducers:{
        setTenantData:(state,action)=>{
            state.tenantData = action.payload
        }
    }
})

export const {setTenantData} = tenantSlice.actions;
export default tenantSlice.reducer