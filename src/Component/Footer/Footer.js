import React, { useState } from 'react'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import songs from './music-list'
import { useSelector } from 'react-redux';
import Player from './Player';




export default function Footer() {
    const [current,setCurrent] = useState(0)
    
    
    const playList = useSelector(state=>state.playLists)
    
    
    return (
        <div className='footer'>
            
            <Player 
                current = {current}
                setCurrent ={setCurrent}
                songs ={playList.length==0?songs:playList[0]}
                active = {playList.length==0}
            />

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
