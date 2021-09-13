import { configureStore } from '@reduxjs/toolkit'
import playListReducer from './Component/HoldSong/songSlice'


const rootReducer = {
    playLists: playListReducer,
    
}

const store = configureStore({
    reducer:rootReducer,
})

export default store;