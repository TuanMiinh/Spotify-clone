import React from 'react'
import './BodyPlaySong.css'
import FowardIcon from '../Component/FowardIcon/FowardIcon'
import Account from '../Component/Account/Account'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import HoldSong from '../Component/HoldSong/HoldSong'
import songs from '../Component/Footer/music-list'

export default function BodyPlaySong() {
   
    
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
                    <PlayCircleFilledIcon style={{ color: '#1DB954',fontSize: 60 }}/>
                    <div>
                        <p>THEO DÕI</p>
                    </div>
                    <MoreHorizIcon style={{ color: 'white',fontSize: 30 }}/>
                </div>

                <div className = 'playsong-body__content'>
                    <h>Phổ biến</h>
                    <div>
                        {
                            songs.map((song, index) => {
                                return <HoldSong song={song} index={index+1}/>
                            })
                        }
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    )
}



