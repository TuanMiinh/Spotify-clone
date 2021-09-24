import React from 'react';
import FowardIcon from '../Component/FowardIcon/FowardIcon';
import Account from '../Component/Account/Account';
import './LibraryBar.css'
import { Link } from 'react-router-dom';
import { useLocation,useRouteMatch } from 'react-router';

export default function LibraryBar() {
    const location = useLocation();
   
    
    
    const acitve_handle = (url)=>{
        return location.pathname === url
    }

    return (
        
            <div className = 'body-bar'>
                <div>
                    <FowardIcon/>
                    <ul>
                        <Link to='/collection/playlists' className='text-link'>
                            <li className={acitve_handle('/collection/playlists')?'body-bar__active':'body-bar__default'}>Playlist</li>
                        </Link>
                        <Link to='/collection/podcast' className='text-link'>
                            <li className={acitve_handle('/collection/podcast')?'body-bar__active':'body-bar__default'}>Podcast</li>
                        </Link>
                        <Link to='/collection/authors' className='text-link'>
                            <li className={acitve_handle('/collection/authors')?'body-bar__active':'body-bar__default'}>Nghệ sĩ</li>
                        </Link>
                        <Link to='/collection/album' className='text-link'>
                            <li className={acitve_handle('/collection/album')?'body-bar__active':'body-bar__default'}>Album</li>
                        </Link>
                        
                        
                       
                        
                    </ul>
                </div>

                
               
                
                <Account/>
            </div>
    
    )
}
