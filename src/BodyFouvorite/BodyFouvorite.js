import React from 'react'
import FowardIcon from '../Component/FowardIcon/FowardIcon'
import Account from '../Component/Account/Account'
import './BodyFouvorite.css'
import { IconContext } from "react-icons";
import {BsHeart,
        BsClock} from "react-icons/bs";
import {BiPlay} from "react-icons/bi"
import data from '../Component/Footer/music-list2'
import HoldSong from '../Component/HoldSong/HoldSong';
import IconPlay from '../Component/IconPlay/IconPlay';
import { useState , useEffect } from 'react';

export default function BodyFouvorite() {
    const playListID = "PL0002";
    const [listPlay,setListPlay] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/playlist/'+playListID)
            .then(respone => respone.json())
            .then(data => {
                setListPlay(data.listSongs)
            });
    },[])

   
    return (
        <div className = 'body'>

            <div className='header header-favourite-song'>
                <div className = 'body-bar'>
                    <FowardIcon/>
                    <Account/>
                </div>

                <div className='header--info'>
                    <div className='header--img img__gradient'>
                        <IconContext.Provider value={{ className: "react-heart-icons" }}>
                            <BsHeart/>
                        </IconContext.Provider>
                    </div>

                    <div className='header--content'>
                        <div className='signal'>Playlist</div>
                        <div className='title'>Liked songs</div>
                        <div className='username'>Tuấn Minh</div>
                    </div>
                </div>
            </div>

            <div className="body__favlist">
                <div className="body__favlist--content ">
                   
                    <IconPlay playListID={playListID}/>
                    
                </div>

                {/* Songs are liked */}
                <div className="sonngs">
                    <div className="songs__title">
                        <div>#</div>
                        <div className="order">Title</div>
                        <div className="album">Album</div>
                        <div className="view">Views</div>
                        <div className="time"><BsClock/></div>
                    </div>
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
