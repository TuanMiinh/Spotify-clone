import React from 'react'
import './HoldSong.css'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { useDispatch } from 'react-redux';
import { addSong } from './songSlice';
export default function HoldSong({song,index}) {


    
    

    return (
        <div className='holdsong' > 
            <div>
                <div className='textIndex'>
                    <p>{index}</p>
                </div>
                <div className='iconPlay'>
                    <PlayArrowIcon/>
                </div>
                <img src={song.img}></img>
                <p>{song.name} ( with {song.artist} )</p>
            </div>
            <p>571.116.699</p>
            <p>2:21</p>
            

        </div>
    )
}


