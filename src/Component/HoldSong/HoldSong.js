import React from 'react'
import './HoldSong.css'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { useDispatch } from 'react-redux';
import { setCurrentSong,setState,addPlayList } from './songSlice';
import { useSelector } from 'react-redux';
import PauseIcon from '@material-ui/icons/Pause';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function HoldSong({song,index,playListID}) {

   const dispatch = useDispatch();

   const handleClick = ()=>{

        const action1 = setState({
            currentSong:index-1,
            playListID:playListID,
            type:'none-button'
        })

        dispatch(action1);
        const action2 = setCurrentSong(index-1);
        dispatch(action2);

        

        

        const action3 = addPlayList({
            playListID:playListID
        })
        
        dispatch(action3)

        
    }

    const handleLike = () =>{
        alert("Added to your favourite list !")
    }



    
    
    const currentSong = useSelector(state => state.playLists).currentSong
    const isPlay = useSelector(state => state.playLists).isPlay
    const playListIdState = useSelector(state => state.playLists).listSongs.idd
   
    

    return (
        <div className={currentSong==index-1&&playListID==playListIdState?"holdsong-active":"holdsong"} > 
            <div>
                <div className='textIndex'>
                    <p>{index}</p>
                </div>
                <div className='iconPlay'>
                    <div className='iconPlay-play'>
                        <PlayArrowIcon onClick={handleClick}/>
                    </div>
                    <div className='iconPlay-pause'>
                        <PauseIcon onClick={handleClick} style={{display: isPlay&&playListID==playListIdState?'block':'none' }}/> 
                        <PlayArrowIcon onClick={handleClick} style={{display: !isPlay?'block':'none' }}/>  
                    </div>
                   
                </div>
                <img src={song.img}></img>
                {/* <p>{song.name} ( with {song.artist} )</p> */}
                <p>{song.name}</p>
                
            </div>
            <p>571.116.699</p>
            <div className = 'end_holder'>
                <FavoriteBorderIcon style={{fontSize: 18}} onClick={handleLike}/>
                <p>2:21</p>
            </div>
            
            

        </div>
    )
}


