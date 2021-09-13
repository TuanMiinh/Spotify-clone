import React, { Fragment } from 'react'
import PlayerControls from './PlayerControls'
import PlayerDetails from './PlayerDetails'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


export default function Player(props) {
    
    const audio = useRef(null);
    const [isPlay,setIsPlay] = useState(false)
    
   
    
    
    
    

    useEffect(() => {
            if(isPlay){
                audio.current.play()
            }else{
                audio.current.pause()
            }
        }
    )

    

    const skipSong = (forwards = true) =>{
        if(forwards){
                props.setCurrent(()=>{
                let temp = props.current;
                temp++;

                if(temp>props.songs.length - 1){
                    temp = 0;
                }

                return temp;
            })
        }else{
                props.setCurrent(()=>{
                let temp = props.current;
                temp--;

                if(temp<0){
                    temp = props.songs.length-1;
                }

                return temp;
            })
    }
}

    return (
        <Fragment>
            <div className='footer-left'>
                
                <PlayerDetails song={props.songs[props.current]}/>
                <FavoriteBorderIcon/>
            </div>

            <div className='footer-mid'>
                
                <PlayerControls 
                        isPlay = {isPlay} 
                        setIsPlay={setIsPlay}
                        skipSong = {skipSong}
                        audio = {audio}
                    />
                <audio ref={audio} src={props.songs[props.current].src}></audio>
                
            </div>
        </Fragment>
    )
}
