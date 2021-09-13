import React, { Fragment } from 'react'
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatOneIcon from '@material-ui/icons/RepeatOne';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';


export default function PlayerControls(props) {

    const [currentTime,setCurrentTime] = useState(0);
    const inputRange = useRef(null);

    
    
    useEffect(() => {
        
        const interval = setInterval(() => {
            if(props.audio.current)
            {
                setCurrentTime(props.audio.current.currentTime);
            }else{
                setCurrentTime(0)
            }
        
        }, 1000);
        return () => clearInterval(interval);
        
      }, []);

      
    
    
    const pad = (num,size) =>{
        var s = num + '';
        while (s.length < size) {
           s = '0' + s;
        }
        return s;
    }

    const format_seconds = (secs) =>{
        return Math.floor(secs / 60) + ':' + (pad(secs % 60, 2));
    }


    const computeBar = (currentTime,duration) =>{
        let result = (currentTime / duration) * 100;
        return result
    }

    const getPosition = (even)=>{
        let postitionBar = inputRange.current.getBoundingClientRect();
        let direct = (even.pageX - postitionBar.left)/(postitionBar.right - postitionBar.left)
        props.audio.current.currentTime = direct*props.audio.current.duration
    }

    




    return (
       
        <Fragment>
            <div className='footer-mid__button'>
            <div><ShuffleIcon style={{ fontSize: 20 }}/></div>
                    <div
                        onClick={()=>props.skipSong(false)} 
                    ><SkipPreviousIcon style={{ fontSize: 20 }}/></div>
                    <div className={props.isPlay?'button':'button-active'}
                        onClick={() =>{props.setIsPlay(!props.isPlay)}}
                    ><PauseCircleFilledIcon   style={{ fontSize: 40, color: 'white'  }}/></div>
                    <div className={!props.isPlay?'button':'button-active'}
                        onClick={() =>{props.setIsPlay(!props.isPlay)}}
                    ><PlayCircleFilledIcon style={{ fontSize: 40 }}/></div>
                    
                    <div
                        onClick={()=>props.skipSong(true)}
                    ><SkipNextIcon style={{ fontSize: 20 }}/></div>
                    <div
                        
                    ><RepeatOneIcon style={{ fontSize: 20 }}/></div> 
                    
                </div>
                <div className='footer-mid__bar'>
                    <p>{format_seconds(currentTime|0)}</p>
                    {/* <div>
                        <div style={{width:props.audio.current?(computeBar(currentTime,props.audio.current.duration)+'%'):'0%'}}></div>
                    </div> */}
                    <input onClick={getPosition} ref={inputRange} type='range' max='100' value={props.audio.current?(computeBar(currentTime,props.audio.current.duration)):'0'} />
                    <p>
                        {
                           props.audio.current?format_seconds(props.audio.current.duration|0):"0:00" 
                        }
                    </p>
                    
                </div>
                
        </Fragment>
        
    )
}
