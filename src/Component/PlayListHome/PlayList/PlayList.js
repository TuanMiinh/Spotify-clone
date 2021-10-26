import React from 'react'
import './PlayList.css';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

export default function PlayList({playlist}) {
    
    return (
        <div className='playlist'>
            <img src={playlist.playlist_image}></img>
            <div>
                <p>{playlist.playlist_name}</p>
                <div>
                    <PlayCircleFilledIcon style={{ fontSize: 40,color:'#1DB954' }}/>
                </div>
            </div>
            
            
        </div>
    )
}
