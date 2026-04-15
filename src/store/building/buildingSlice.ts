import { createSlice } from "@reduxjs/toolkit";

export const buildingSlice = createSlice({
    name:"building",
    initialState:{
        buildingData:{}
    },
    reducers:{
        setBuildingData:(state,action)=>{
            state.buildingData = action.payload
        }
    }
})

export const {setBuildingData} = buildingSlice.actions
export default buildingSlice.reducer