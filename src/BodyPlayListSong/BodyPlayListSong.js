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
import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import { IconContext } from "react-icons"
import {BsThreeDots,BsSearch} from "react-icons/bs"
import ModifyPopup from '../BodyPlayList/ModifyPopup'
import DeletePopup from '../BodyPlayList/DeletePopup'




export default function BodyPlayListSong() {
    const [displayPopup,setDisplayPopup] = useState(false)
    const [displayDelete,setDisplayDelete] = useState(false)
    const location = useLocation();
    const getPlayListId = (pathname)=>{
        pathname = pathname.split("/")
        return(pathname[2])
    }

    const token = useSelector(state => state.playLists).token
    
    const playListID = getPlayListId(location.pathname)
    const [listPlay,setListPlay] = useState(null);
    

    useEffect(() => {
        fetch('http://localhost:8080/api/playlist/'+playListID,{
            headers:{
                'Authorization':token
            }
        })
            .then(respone => respone.json())
            .then(data => {
                setListPlay(data)
                
            });
    })
    
    

    return listPlay?(
        <Fragment>
            <div className='body'>
                <ModifyPopup displayPopup={displayPopup} playlist={listPlay} 
                onSubmit={()=>setDisplayPopup(false)} playlistID={playListID} token={token}/>
                <DeletePopup displayDelete={displayDelete} playlistID={playListID} token={token}
                onSubmit={()=>setDisplayDelete(false)}/>
                <div className='bdplaylist-top'>
                    <div className='body-bar'>
                        <FowardIcon/>
                        <div>
                            <Account/>
                        </div>
                    </div>

                    <div className='bdplaylist-top__img'> 
                        <img src={listPlay.playlist_image}></img>
                        <div>
                            <p>PLAYLST</p>
                            <h>{listPlay.playlist_name}</h>
                        </div>
                    </div>
                </div>
                <div className='bdplaylist-body'>
                    <div className = 'bdplaylist-body__button'>
                            <IconPlay playListID={playListID}/>
                            <FavoriteBorderIcon style={{color: 'grey', fontSize: 40 }}/>
                            <div className="dot-icon" >
                                <IconContext.Provider value={{ className: "react-dot-icons" }}>
                                    <BsThreeDots />
                                </IconContext.Provider>
                                <ul class="dropdown-content" id="myDropdown">
                                    <li>Thêm vào danh sách chờ</li>
                                    <li onClick={()=>setDisplayPopup(true)}>Sửa thông tin chi tiết</li>
                                    <li onClick={()=>setDisplayDelete(true)}>Xóa</li>
                                    <li>Chia sẻ</li>
                                </ul>
                            </div>
                        </div>
                     
                    <div>
                    
                        {   
                            sort_by_key(listPlay.listSongs,"song_id").map((song,i) =>{
                                
                                return <HoldSong song = {song} index={i+1} playListID={playListID} canRemove={true}/>
                            })
                        }
                    </div>
                    
                    
                </div>


                
                
            </div>
            
        </Fragment>
        
    ):(<Fragment>
        <div className='body'>
            <div className='bdplaylist-top'>
                <div className='body-bar'>
                    <FowardIcon/>
                    <div>
                        <Account/>
                    </div>
                </div>

                <div className='bdplaylist-top__img'> 
                    {/* <img src={listPlay.playlist_image}></img> */}
                    <div>
                        <p>PLAYLST</p>
                        {/* <h>{listPlay.playlist_name}</h> */}
                    </div>
                </div>
            </div>
            <div className='bdplaylist-body'>
                <div className = 'bdplaylist-body__button'>
                        {/* <IconPlay playListID={playListID}/> */}
                        <FavoriteBorderIcon style={{color: 'grey', fontSize: 40 }}/>
                        <MoreHorizIcon style={{ color: 'grey',fontSize: 30 }}/>
                    </div>
                    
                {/* <div>
                    {   
                        listPlay.listSongs.map((song,i) =>{
                            
                            return <HoldSong song = {song} index={i+1} playListID={playListID}/>
                        })
                    }
                </div> */}
                
                
            </div>


            
            
        </div>
        
    </Fragment>)
}

function sort_by_key(array, key)
{
 return array.sort(function(a, b)
 {
  var x = a[key]; var y = b[key];
  return ((x < y) ? -1 : ((x > y) ? 1 : 0));
 });
}