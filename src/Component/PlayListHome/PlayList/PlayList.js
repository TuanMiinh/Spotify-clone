import React from 'react'
import './PlayList.css';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

export default function PlayList({playlist}) {
    return (
        <div className='playlist'>
            <img src={playlist.img}></img>
            <div>
                <p>{playlist.text}</p>
                <div>
                    <PlayCircleFilledIcon style={{ fontSize: 40,color:'#1DB954' }}/>
                </div>
            </div>
            
            
        </div>
    )
}
