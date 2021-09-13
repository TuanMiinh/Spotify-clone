import React from 'react';
import './RecomSong.css';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

export default function RecomSong() {
    return (
        <div className='recomsong'>
            
            <div className='recomsong-img'>
                <img src='https://i.pinimg.com/474x/51/12/bf/5112bfa6c8fc083ebc79316e8bc91dfd.jpg'></img>
                    <div className='recomsong-img__icon'>
                        <PlayCircleFilledIcon style={{ fontSize: 40,color:'#1DB954' }}/>
                    </div>
            </div>
            
            <div>
                <h>Daly Mix 1</h>
                <p>OvN,Lamar Azul, Jazzinuf và nhiều hơn...</p>
            </div>
        </div>
    )
}
