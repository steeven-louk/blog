import {createSlice} from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
    name: "favorites",
    initialState :[],

    reducers:{
        addToFavoris:(state, action)=>{
            const postId = action.payload;
            if (!state.includes(postId)) {
                state.push(postId);
            }
        },
        removeFromFavorites:(state, action) =>{
            const postId = action.payload;
            const index = state.indexOf(postId);
            if(index !== -1){
                state.splice(index, 1)
            }
        }
    }
});

export const { addToFavoris, removeFromFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;