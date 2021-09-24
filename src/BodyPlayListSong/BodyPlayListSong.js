import React, { Fragment } from 'react'
import Account from '../Component/Account/Account'
import FowardIcon from '../Component/FowardIcon/FowardIcon'
import './BodyPlayListSong.css'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import HoldSong from '../Component/HoldSong/HoldSong'
import data from '../Component/Footer/music-list2'
import { useLocation } from 'react-router'
import IconPlay from '../Component/IconPlay/IconPlay'



export default function BodyPlayListSong() {


    const location = useLocation();
    const getPlayListId = (pathname)=>{
        pathname = pathname.split("/")
        return(pathname[2])
    }
    
    const playListID = getPlayListId(location.pathname)
    
    const listPlay = data.find(list=>list.idd===playListID)
   
    
    

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
                            <IconPlay playListID={playListID}/>
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
