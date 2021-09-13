import { createSlice } from "@reduxjs/toolkit";

const playList = createSlice({
    name:'playList',
    initialState:[],
    reducers:{
        addPlayList: (state,action) =>{
            state.push(action.payload)
        }
    }
});

const {reducer, actions} = playList
export const {addPlayList} = actions
export default reducer;