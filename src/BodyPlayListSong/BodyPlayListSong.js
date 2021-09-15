import React, { Fragment } from 'react'
import Account from '../Component/Account/Account'
import FowardIcon from '../Component/FowardIcon/FowardIcon'
import './BodyPlayListSong.css'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import HoldSong from '../Component/HoldSong/HoldSong'
import { useDispatch,useSelector } from 'react-redux'
import { addPlayList,setState } from '../Component/HoldSong/songSlice'
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PauseCircleFilled from '@material-ui/icons/PauseCircleFilled'
import data from '../Component/Footer/music-list2'
import { useLocation } from 'react-router'



export default function BodyPlayListSong() {


    const location = useLocation();
    const getPlayListId = (pathname)=>{
        pathname = pathname.split("/")
        return(pathname[2])
    }
    
    const playListID = getPlayListId(location.pathname)
    
    const listPlay = data.find(list=>list.idd===playListID)
   
    



   const isPlay = useSelector(state => state.playLists).isPlay
   const playListState = useSelector(state=> state.playLists).listSongs.idd
   
   const dispatch = useDispatch();
   const handleClick = ()=>{
        

    const action1 = setState({
        playListID : playListID,
        type:'button'
    });
    dispatch(action1)

    
    const action2 = addPlayList({
        playListID:playListID
    })
    dispatch(action2)
    
        
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
                        <img src={listPlay.img}></img>
                        <div>
                            <p>PLAYLST</p>
                            <h>{listPlay.title}</h>
                        </div>
                    </div>
                </div>
                <div className='bdplaylist-body'>
                    <div className = 'bdplaylist-body__button'>
                            <PauseCircleFilled style={{ color: '#1DB954',fontSize: 60, display:isPlay&&playListState==playListID?'block':'none' }} onClick={handleClick}/>
                            <PlayCircleFilledIcon style={{ color: '#1DB954',fontSize: 60,display:!isPlay||playListState!=playListID?'block':'none' }} onClick={handleClick}/>
                            <FavoriteBorderIcon style={{color: 'grey', fontSize: 40 }}/>
                            <MoreHorizIcon style={{ color: 'grey',fontSize: 30 }}/>
                        </div>
                    <div>
                        {   
                            listPlay.songList.map((song,i) =>{
                                
                                return <HoldSong song = {song} index={i+1} playListID={playListID}/>
                            })
                        }
                    </div>
                    
                    
                </div>


                
                
            </div>
            
        </Fragment>
    )
}
