import { createSlice } from "@reduxjs/toolkit";

 const loadingSlice = createSlice({
    name: "loading",
    initialState:{
        isLoading: false
    },
    reducers:{
        showLoading:(state, _)=>{
            state.isLoading = true;
        },
        hideLoading:(state,_)=>{
            state.isLoading = false;
        }
    }
});


export const {showLoading, hideLoading} = loadingSlice.actions;
export default loadingSlice;