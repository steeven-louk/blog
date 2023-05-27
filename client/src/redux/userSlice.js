import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:"user",
    initialState:{
        userData: null,
        isAdmin: localStorage.getItem("isAdmin") ? JSON.parse(localStorage.getItem("isAdmin")) : null
    },

    reducers:{
        setUserData:(state, action)=>{
            state.userData = action.payload
        },
        setIsAdmin:(state, action)=>{
            state.isAdmin = action.payload
        }
    }
})

export const {setUserData, setIsAdmin} = userSlice.actions
export default userSlice;