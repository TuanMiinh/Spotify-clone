import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import IconText from './IconText';
import HomeIcon from '@material-ui/icons/Home';
import PageviewIcon from '@material-ui/icons/Pageview';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import FavoriteIcon from '@material-ui/icons/Favorite';
import  playlist from './dataPlayList';
import { useState } from 'react';
export default function SideBar() {
    // const [url,setUrl] = useState('/');
    // const onClick = () =>{
    //     st
    // } 

    
    return (
            
            <div className='sidebar'>
                <div className='sidebar-top'>
                    <Link to='/' className='text-link'>
                        <IconText name='Trang chủ' Icon={HomeIcon} url='/'/></Link>
                    <Link to='/search' className='text-link'>
                        <IconText name='Tìm kiếm'Icon={PageviewIcon} url='/search'/></Link>
                    <Link to='/collection/playlists' className='text-link'>
                        <IconText name='Thư viện'Icon={LibraryMusicIcon} url='/collection/playlists'/>
                    </Link>
                    
                </div>    
                    <div className='sidebar-mid'>
                        <Link to='/playlist' className='text-link'>
                            <IconText name='Tạo playlist' Icon={AddToPhotosIcon} url='/playlist'/>
                        </Link>
                        <Link to='/collection' className='text-link'>
                            <IconText name='Bài hát đã thích'Icon={FavoriteIcon} url='/collection'/>
                        </Link>
                        
                        

                    </div>
                    
                
                    <div className='sidebar-bottom'>
                        {
                            playlist.map((list) =>{
                                return <IconText name={list.name}/>
                            })
                        }
                    </div>
                
            </div>
       
       
    )
}
