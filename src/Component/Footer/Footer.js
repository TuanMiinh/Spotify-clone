import React, { useEffect, useState, useRef } from 'react'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import songs1 from './music-list'
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatOneIcon from '@material-ui/icons/RepeatOne';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useDispatch,useSelector } from 'react-redux'
import { setCurrentSong , setState } from '../HoldSong/songSlice';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteIcon from '@material-ui/icons/Favorite';







export default function Footer() {
    
    const [currentTime, setCurrentTime] = useState(0)
    const inputRange = useRef(null);
    const audio = useRef(null)
    const [isRepeat,setIsRepeat] = useState(false)
    
   
    

    const isPlay = useSelector(state => state.playLists).isPlay
   

    useEffect(()=>{
        if(audio.current!=null){
            if(isPlay){
                audio.current.play()
            }else{
                audio.current.pause()
            }
        }
        
        
        
    })

    useEffect(()=>{
        if(audio.current!=null){
            if((isRepeat==false)&&currentTime == audio.current.duration){
                handleNext();
            }
        }
        
    })

    
    useEffect(() => {
        
        const interval = setInterval(() => {
            if(audio.current)
            {
                setCurrentTime(audio.current.currentTime);
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


    const handleNext = ()=>{
        if(current==songs.length-1)
        {
            const action = setCurrentSong({
                current:0,
                songID:songs[0].song_id
            });
            dispatch(action);
        }else{
            const action = setCurrentSong({
                current:current+1,
                songID:songs[current+1].song_id
            });
            dispatch(action);
        }
        
    }

    const handlePrev = ()=>{
        if(current==0)
        {
            const action = setCurrentSong({
                current:songs.length-1,
                songID:songs[songs.length-1].song_id
            });
            dispatch(action);
        }else{
            const action = setCurrentSong({
                current:current-1,
                songID:songs[current-1].song_id
            });
            dispatch(action);
        }
        
    }


    const computeBar = (currentTime,duration) =>{
        let result = (currentTime / duration) * 100;
        return result
    }

    const getPosition = (even)=>{
        let postitionBar = inputRange.current.getBoundingClientRect();
        let direct = (even.pageX - postitionBar.left)/(postitionBar.right - postitionBar.left)
        audio.current.currentTime = direct*audio.current.duration
    }

    const dispatch = useDispatch();
    const handleClick = ()=>{

        const action = setState({
            type:'button'
        });
        dispatch(action)

        
    }

    
    
    
    const playList = useSelector(state=>state.playLists).listSongs
    const songs = useSelector(state=>state.playLists).listSongs.length!=0?playList:null
    const current = useSelector(state => state.playLists).currentSong
    
    // const [isFavourite , setIsFavourite] = useState(useSelector(state => state.playLists).favourites.indexOf(songs[current].song_id) > -1);
    const abc = useSelector(state => state.playLists).favourites
    const x = (songs!=null?abc.indexOf(songs[current].song_id) > -1:false)
    
    const [isFavourite , setIsFavourite] = useState(songs!=null?abc.indexOf(songs[current].song_id) > -1:false)
    
    
    
    return songs!=null?(
        <div className='footer'>
            <div className='footer-left'>
                
            <img src={songs[current].song_image}/>
                <div className='song-detail' >
                    <h>{songs[current].song_name}</h>
                    <p>{songs[current].artist[0].artist_name}</p>
                    
                </div>
                <FavoriteBorderIcon style={{display: isFavourite?'none':'block'}}/>
                <FavoriteIcon style={{display: !isFavourite?'none':'block'}}/>
            </div>

            <div className='footer-mid'>
                
            <div className='footer-mid__button'>
            <div><ShuffleIcon style={{ fontSize: 20 }}/></div>
                    <div onClick={handlePrev}
                    ><SkipPreviousIcon style={{ fontSize: 20 }}/></div>
                    

                    <div className={isPlay?'button':'button-active'}>
                        <PauseCircleFilledIcon onClick={handleClick} style={{ fontSize: 40, color: 'white'  }}/></div>
                    <div className={!isPlay?'button':'button-active'}>
                        <PlayCircleFilledIcon onClick={handleClick} style={{ fontSize: 40 }}/></div>
                    
                    <div onClick={handleNext}>
                        <SkipNextIcon style={{ fontSize: 20 }}/></div>
                    <div className={isRepeat?'button':'button-active'}
                        onClick={()=>{setIsRepeat(false)}}
                        ><RepeatOneIcon style={{ fontSize: 20,color:'white' }}/></div> 
                    <div className={!isRepeat?'button':'button-active'}
                        onClick={()=>{setIsRepeat(true)}}
                        ><RepeatIcon style={{ fontSize: 20 }}/></div>
                    
                </div>
                <div className='footer-mid__bar'>
                    <p>{format_seconds(currentTime|0)}</p>
                    <input onClick={getPosition} ref={inputRange} type='range' max='100' value={audio.current?(computeBar(currentTime,audio.current.duration)):'0'} />
                    <p>
                        {
                           audio.current?format_seconds(audio.current.duration|0):"0:00" 
                        } 
                    </p>
                    
                </div>
                <audio ref={audio} src={'http://localhost:8080/api/song/stream/'+songs[current].song_id}></audio>
                
            </div>



            
            

            <div className='footer-right'>
                    
                    <div>
                        <div >
                            <PlaylistPlayIcon/>
                        </div>
                        <div className='footer-right__icon'>
                            <ImportantDevicesIcon/>
                        </div>
                        </div>
                    <div>
                        <VolumeUpIcon/>
                        <div className='footer-right__bar'>
                            <div></div>
                        </div>
                    </div>
                    
            </div>
        </div>
    ):(
        <div className='footer'>
            <div className='footer-left'>
                
            
                <div className='song-detail' >
                    <h></h>
                    <p></p>
                    
                </div>
                
            </div>

            <div className='footer-mid'>
                
            <div className='footer-mid__button'>
            <div><ShuffleIcon style={{ fontSize: 20 }}/></div>
                    <div ><SkipPreviousIcon style={{ fontSize: 20 }}/></div>
                    <div className={'button'}>
                        <PlayCircleFilledIcon  style={{ fontSize: 40 }}/></div>
                    
                    <div >
                        <SkipNextIcon style={{ fontSize: 20 }}/></div>
                    
                    <div className={'button'}
                        ><RepeatIcon style={{ fontSize: 20 }}/></div>
                    
                </div>
                <div className='footer-mid__bar'>
                    <p>0:00</p>
                    <input   type='range' max='100'  value='0'/>
                    <p>0:00</p>
                    
                </div>
                
                
            </div>



            
            

            <div className='footer-right'>
                    
                    <div>
                        <div >
                            <PlaylistPlayIcon/>
                        </div>
                        <div className='footer-right__icon'>
                            <ImportantDevicesIcon/>
                        </div>
                        </div>
                    <div>
                        <VolumeUpIcon/>
                        <div className='footer-right__bar'>
                            <div></div>
                        </div>
                    </div>
                    
            </div>
        </div>
    )
}
