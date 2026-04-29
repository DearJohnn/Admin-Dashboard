import { createSlice } from "@reduxjs/toolkit";

export const contractSlice = createSlice({
    name:"contract",
    initialState:{
        data:[],
        total:0,
        searchData:{},
        currentPage:1,
        currentPageSize:10
    },
    reducers:{
        setData:(state,action)=>{
            state.data = action.payload;
        },
        setTotal:(state,action)=>{
            state.total = action.payload;
        },
        setSearchData:(state,action)=>{
            state.searchData = action.payload; 
        },
        setCurrentPage:(state,action)=>{
            state.currentPage = action.payload;
        },
        setCurrentPageSize:(state,action)=>{
            state.currentPageSize = action.payload;
        }
    }
})

export const {setData,setTotal,setSearchData,setCurrentPage,setCurrentPageSize} = contractSlice.actions;
export default contractSlice.reducer;