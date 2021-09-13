import React from 'react';
import FowardIcon from '../Component/FowardIcon/FowardIcon';
import Account from '../Component/Account/Account';
import './LibraryBar.css'

export default function LibraryBar() {
    return (
        
            <div className = 'body-bar'>
                <div>
                    <FowardIcon/>
                    <ul>
                        <li>Playlist</li>
                        <li>Podcast</li>
                        <li>Nghệ sĩ</li>
                        <li>Album</li>
                    </ul>
                </div>

                
               
                
                <Account/>
            </div>
    
    )
}
