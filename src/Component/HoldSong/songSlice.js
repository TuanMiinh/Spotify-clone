import { createSlice } from "@reduxjs/toolkit";
import data from '../Footer/music-list2'
import { useState } from "react";

const initialState = {
    listSongs:[],
    currentSong:0,
    isPlay: false,
    playListID:null,
    favouriteListInfo:[],
    songID:null,
    token:null,
    count:0,
    userInfo:null,
    userPlayList:[],
    favouriteListID:[]
    
}



function sort_by_key(array, key)
{
 return array.sort(function(a, b)
 {
  var x = a[key]; var y = b[key];
  return ((x < y) ? -1 : ((x > y) ? 1 : 0));
 });
}


const playList = createSlice({
    name:'playList',
    initialState,
    reducers:{
        
        addPlayList: (state,action) =>{
                state.listSongs = action.payload.listSong
                state.playListID = action.payload.playListID

                sort_by_key(state.listSongs, "song_id")
                return state
            },
        setFavourites: (state,action) =>{
            if(action.payload.type == 'ADD')
                state.favouriteListID.push(action.payload.song.song_id)
            if(action.payload.type == 'REMOVE'){
                let i;
                for(i = 0 ; i <= state.favouriteListID.length - 1 ; i++)
                    if(state.favouriteListID[i] == action.payload.song.song_id)
                        state.favouriteListID.splice(i, 1)
                }
                
            if(action.payload.type == 'SET')
                state.favouriteListID = action.payload.listSongID
            if(action.payload.type == 'SET-INFOR')
                state.favouriteListInfo = action.payload.listSong
                
            state.favouriteListID.sort()    
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
            if(action.payload.type=='search'&&state.songID!=action.payload.songID){
                state.isPlay = true
                return state
            }
            
            if(action.payload.type=='search'&&state.songID==action.payload.songID){
                state.isPlay = false
                return state
            }

            
                return state
            
        },
        setToken: (state,action)=>{
            state.token = action.payload.token
            return state
        },
        setCount:(state,action)=>{
            state.count = action.payload.count
            return state
        },
        setUserInfo:(state,action) =>{
            state.userInfo = action.payload.userInfo
            return state
        },
        setUserPlayList:(state,action) =>{
            state.userPlayList = action.payload.userPlayList
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
export const {setCount} = actions
export const {setUserInfo} = actions
export const {setUserPlayList} = actions
export const {setFavourites} = actions
export default reducer;