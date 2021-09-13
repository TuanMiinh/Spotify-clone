import { createSlice } from "@reduxjs/toolkit";

const isPlayControl = createSlice({
    name:'isPlay',
    initialState:[],
    reducers:{
        addIsPlay: (state,action) =>{
            state.push(action.payload)
        }
    }
});

const {reducer, actions} = isPlayControl
export const {addIsPlay} = actions
export default reducer;