import React, { Fragment, useRef } from 'react'
import FowardIcon from '../Component/FowardIcon/FowardIcon'
import Account from '../Component/Account/Account'
import './BodyPlayList.css'
import { IconContext } from "react-icons"
import {BsThreeDots,BsSearch} from "react-icons/bs"
import { useSelector } from 'react-redux'
import { useEffect, useState} from 'react'
import SongFound from '../Component/SongFound/SongFound'
import HoldSong from '../Component/HoldSong/HoldSong'
import ModifyPopup from './ModifyPopup'
import DeletePopup from './DeletePopup'


export default function BodyPlayList() {

    const [searchTerm,setSearchTerm] = useState('')
    const typingTimeOutRef = useRef(null)
    const [songList, setSongList] = useState([]);
    const token = useSelector(state => state.playLists).token
    const [playlist,setPlaylist] = useState(null)
    const [playlistID, setPlaylistID] = useState(null)
    const [displayPopup,setDisplayPopup] = useState(false)
    const [displayDelete,setDisplayDelete] = useState(false)
    const handleSearchTermChangle = (e) =>{
        setSearchTerm(e.target.value);
            
        if(typingTimeOutRef.current){
            clearTimeout(typingTimeOutRef.current);
        };

        typingTimeOutRef.current = setTimeout(()=>{
            setSearchTerm(e.target.value);
            fetch('http://localhost:8080/api/song/search/'+searchTerm,{
                headers:{
                    'Authorization':token
                }
            })
                .then(respone => respone.json())
                .then(data => {
                    setSongList(data)
                });
        },300)

    }

    useEffect(() => {
        fetch('http://localhost:8080/api/playlist/',{
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization':token
                
            },
            body: JSON.stringify({
                "owner":{
                    "user_id": "U0001"
                    
                },
                "playlist_name": "Nhạc của tôi",
                "playlist_duration": 1000,
                "playlist_image": "https://dt.muvi.vn//mvn/img/v3-default-song-thumbnail.jpg?w=300&h=300",
                "listSongs": []
            })
        })
            .then(respone => respone.json())
            .then(data => {
                setPlaylistID(data.playlist_id);
                
                
            });
    },[])

    useEffect(() => {
        fetch('http://localhost:8080/api/playlist/'+playlistID,{
            headers: { 
                'Authorization':token
                
            },
            
        })
            .then(respone => respone.json())
            .then(data => {
                setPlaylist(data)
                
            });
    })
    


    


    return playlist?(
        <div className='body'>
            <ModifyPopup displayPopup={displayPopup} playlist={playlist} 
            onSubmit={()=>setDisplayPopup(false)} playlistID={playlistID} token={token}/>
            <DeletePopup displayDelete={displayDelete} playlistID={playlistID} token={token}
            onSubmit={()=>setDisplayDelete(false)}/>
            <div className= 'header'>
                    <div className = 'body-bar'>
                        <FowardIcon/>
                        <Account/>
                    </div>

                    <div className='header--info'>
                        <div className='header--img'>
                            <img src={playlist.playlist_image} alt="" />
                        </div>

                        <div className='header--content'>
                            <div className='signal'>Playlist</div>
                            <div className='title'>{playlist.playlist_name}</div>
                            <div className='username'>Tuấn Minh</div>
                        </div>
                    </div>
                </div>
                <div className="body__playlist">
                    <div className="body__playlist--content ">
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
                        <div>
                            {  playlist?(
                                
                                    playlist.listSongs.map((song,i) =>{
                                    
                                    return <HoldSong song = {song} index={i+1} playListID={playlist.playlist_id}/>
                                })
                                
                            ) :<Fragment></Fragment>
                                
                            }
                        </div>

                        <div className="body__playlist--search ">
                            <div className="playlist--title">
                            Hãy cùng tìm nội dung cho danh sách phát của bạn
                            </div>
                            <div className="playlist--search">
                                <IconContext.Provider value={{ className: "react-search-icons" }}>
                                    <BsSearch />
                                </IconContext.Provider>
                                <input type="text" className="search--box" placeholder="Search song" value={searchTerm} onChange={handleSearchTermChangle}/>
                                
                            </div>
                        </div>

                        <div>
                        {   
                             
                            songList.map((song) =>{
                                
                            
                                return <SongFound song = {song} playlistID = {playlist.playlist_id} token={token}/>
                                
                            })
                        }
                            
                        </div>

                    
                    </div>
                </div>
            
            
           
        </div>
    ):""
}
