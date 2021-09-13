import React, { Fragment } from 'react'
import Account from '../Component/Account/Account'
import FowardIcon from '../Component/FowardIcon/FowardIcon'
import './BodyPlayListSong.css'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import HoldSong from '../Component/HoldSong/HoldSong'
import songs from '../Component/Footer/music-list2'
import songs2 from '../Component/Footer/music-list'
import { useDispatch } from 'react-redux'
import { addPlayList } from '../Component/HoldSong/songSlice'



export default function BodyPlayListSong() {



   const dispatch = useDispatch();
   const handleClick = ()=>{
        const action1 = addPlayList(songs.songList);
        dispatch(action1);
        
        
   }
    
    

    return (
        <Fragment>
            <div className='body'>
                <div className='bdplaylist-top'>
                    <div className='body-bar'>
                        <FowardIcon/>
                        <div>
                            <Account/>
                        </div>
                    </div>

                    <div className='bdplaylist-top__img'> 
                        <img src={songs.img}></img>
                        <div>
                            <p>PLAYLST</p>
                            <h>{songs.title}</h>
                        </div>
                    </div>
                </div>
                <div className='bdplaylist-body'>
                    <div className = 'bdplaylist-body__button'>
                            <PlayCircleFilledIcon style={{ color: '#1DB954',fontSize: 60 }} onClick={handleClick}/>
                            <FavoriteBorderIcon style={{color: 'grey', fontSize: 40 }}/>
                            <MoreHorizIcon style={{ color: 'grey',fontSize: 30 }}/>
                        </div>
                    <div>
                        {   
                            songs.songList.map((song,i) =>{
                                
                                return <HoldSong song = {song} index={i+1}/>
                            })
                        }
                    </div>
                    
                    
                </div>


                
                
            </div>
            
        </Fragment>
    )
}
