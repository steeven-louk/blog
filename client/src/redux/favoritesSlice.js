import {createSlice} from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
    name: "favories",
    initialState :{
        items: [],
        isFavorite: false
    },

    reducers:{
        addToFavoris:(state, action)=>{
            // const postId = action.payload;
            // if (!state.includes(postId)) {
            //     state.push(postId);
            // }
            state.items.push(action.payload);
            state.isFavorite = true
        },
        removeFromFavorites:(state, action) =>{
           state.items = state.items.filter((item)=> item.id !== action.payload);
           state.isFavorite = false;
        }
    }
});

export const { addToFavoris, removeFromFavorites } = favoriteSlice.actions;
export const selectFavorites = state => state.isFavorite;
export default favoriteSlice.reducer;