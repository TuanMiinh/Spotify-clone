import { createSlice } from "@reduxjs/toolkit";
import data from '../Footer/music-list2'
import { useState } from "react";

const initialState = {
    listSongs:[],
    currentSong:0,
    isPlay: false,
    playListID:null,
    favourites:[],
    songID:null,
    token:null,
    
}





const playList = createSlice({
    name:'playList',
    initialState,
    reducers:{
        
        addPlayList: (state,action) =>{
                state.listSongs = action.payload.listSong
                state.playListID = action.payload.playListID
                return state
            },
        addFavourites: (state,action) =>{
                if(action.payload.favourites!=null)
                    state.favourites = action.payload.favourites
                if(action.payload.favourite!=null)
                    state.favourites.push(action.payload.favourite)
                return state
        },
        removeFavourites: (state,action) => {
            state.favourites.pop(action.payload.favourite)
            return state
        }
        ,
        setSongIndex: (state,action)=>{
            state.songIndex = action.payload.song_id
            return state
        },
    
       setCurrentSong: (state,action) =>{
           if(action.payload.current!=null)
                state.currentSong = action.payload.current;
           state.songID = action.payload.songID
                return state
        },
        setState: (state,action)=>{
            if((state.currentSong==action.payload.currentSong)
                ||!state.isPlay||
                (action.payload.type=='button'&&state.playListID == action.payload.playListID)||
                (action.payload.type=='button'&&action.payload.playListID==null))
            {   
                state.isPlay = !state.isPlay
                return state
            }
            
                return state
            
        },
        setToken: (state,action)=>{
            state.token = action.payload.token
            return state
        }

    }
});

const {reducer, actions} = playList
export const {addPlayList} = actions
export const {setCurrentSong} = actions
export const {setState} = actions
export const {addFavourites} = actions
export const {setSongIndex} = actions
export const {removeFavourites} = actions
export const {setToken} = actions
export default reducer;