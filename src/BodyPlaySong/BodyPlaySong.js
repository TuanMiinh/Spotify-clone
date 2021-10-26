import React from 'react'
import './BodyPlaySong.css'
import FowardIcon from '../Component/FowardIcon/FowardIcon'
import Account from '../Component/Account/Account'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import HoldSong from '../Component/HoldSong/HoldSong'
import data from '../Component/Footer/music-list2'
import IconPlay from '../Component/IconPlay/IconPlay';
import { useLocation } from 'react-router';
import { useState , useEffect } from 'react';

export default function BodyPlaySong() {
   
    const location = useLocation();
    const getPlayListId = (pathname)=>{
        pathname = pathname.split("/")
        return(pathname[2])
    }

    
    
    const playListID = getPlayListId(location.pathname)
    const [listPlay,setListPlay] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:8080/api/playlist/'+playListID)
            .then(respone => respone.json())
            .then(data => {
                setListPlay(sort_by_key(data.listSongs,"song_id"))
            });
    },[])

    
    return (
        <div className='body'>
            <div className='playsong-top'>
                <div className='body-bar'>
                        <FowardIcon/>
                        <div>
                            <Account/>
                        </div>
                </div>

                <div>
                    <h>Justin Bieber</h>
                </div>
            </div>
            
            <div className = 'playsong-body'>
                <div className = 'playsong-body__button'>
                    
                    <IconPlay playListID={playListID}/>
                    <div className='playsong-body__text'>
                        <p>THEO DÕI</p>
                    </div>
                    <MoreHorizIcon style={{ color: 'white',fontSize: 30 }}/>
                </div>

                <div className = 'playsong-body__content'>
                    <h>Phổ biến</h>
                    <div>
                        
                        
                        {   
                            listPlay.map((song,i) =>{
                                
                                return <HoldSong song = {song} index={i+1} playListID={playListID}/>
                            })
                        }
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    )
}


function sort_by_key(array, key)
{
 return array.sort(function(a, b)
 {
  var x = a[key]; var y = b[key];
  return ((x < y) ? -1 : ((x > y) ? 1 : 0));
 });
}



