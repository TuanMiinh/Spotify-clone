import { createSlice } from "@reduxjs/toolkit";
import data from '../Footer/music-list2'

const initialState = {
    listSongs:[],
    currentSong:0,
    isPlay: false,
}

const listPlay =(playListID) =>{
    return data.find(list=>list.idd===playListID)
} 

const playList = createSlice({
    name:'playList',
    initialState,
    reducers:{
        // addPlayList: (state,action) =>{
        //     state.listSongs = action.payload
        //     return state
        // },
        
        addPlayList: (state,action) =>{
            state.listSongs = listPlay(action.payload.playListID)
            return state
        },

        setCurrentSong: (state,action) =>{
            state.currentSong = action.payload
            return state
        },
        setState: (state,action)=>{
            if((state.currentSong==action.payload.currentSong)
                ||!state.isPlay||
                (action.payload.type=='button'&&state.listSongs.idd == action.payload.playListID)||
                (action.payload.type=='button'&&action.payload.playListID==null))
            {   
                state.isPlay = !state.isPlay
                return state
            }
            
                return state
            
        }

    }
});

const {reducer, actions} = playList
export const {addPlayList} = actions
export const {setCurrentSong} = actions
export const {setState} = actions
export default reducer;