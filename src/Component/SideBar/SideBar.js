import React from 'react';
import {Link} from "react-router-dom";
import IconText from './IconText';
import HomeIcon from '@material-ui/icons/Home';
import PageviewIcon from '@material-ui/icons/Pageview';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import FavoriteIcon from '@material-ui/icons/Favorite';
// import  playlist from './dataPlayList';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { useState , useEffect } from 'react';
import { setCount } from '../HoldSong/songSlice';
import { useDispatch } from 'react-redux';
export default function SideBar() {
    
    
    const [playlist,setPlaylist] = useState([]);
    const token = useSelector(state => state.playLists).token

    useEffect(() => {
        fetch('http://localhost:8080/api/playlist/',{
            headers:{
                    'Authorization':token
            }
        })
            .then(respone => respone.json())
            .then(data => {
                setPlaylist(filterFavou(data))

            });
    })
    

    const dispatch = useDispatch()
    
    const action1 = setCount({
        count:playlist.length
    })

    dispatch(action1);
    return token?(
            
            <div className='sidebar'>
                <div className='sidebar-top'>
                    <Link to='/' className='text-link'>
                        <IconText name='Trang chủ' Icon={HomeIcon} url='/' /></Link>
                    <Link to='/search' className='text-link'>
                        <IconText name='Tìm kiếm'Icon={PageviewIcon} url='/search'/></Link>
                    <Link to='/collection/playlists' className='text-link'>
                        <IconText name='Thư viện'Icon={LibraryMusicIcon} url='/collection'/>
                    </Link>
                    
                </div>    
                    <div className='sidebar-mid'>
                        <Link to='/playlist' className='text-link'>
                            <IconText name='Tạo playlist' Icon={AddToPhotosIcon} url='/playlist'/>
                        </Link>
                        <Link to='/tracks' className='text-link'>
                            <IconText name='Bài hát đã thích'Icon={FavoriteIcon} url='/tracks'/>
                        </Link>
                        
                        

                    </div>
                    
                
                    <div className='sidebar-bottom'>
                        {
                            playlist.map((list) =>{
                                return <IconText name={list.playlist_name} id={list.playlist_id}/>
                            })
                        }
                    </div>
                
            </div>
       
       
    ):(
        <div className='sidebar'>
                <div className='sidebar-top'>
                    <Link to='/' className='text-link'>
                        <IconText name='Trang chủ' Icon={HomeIcon} url='/' /></Link>
                    <Link to='/search' className='text-link'>
                        <IconText name='Tìm kiếm'Icon={PageviewIcon} url='/search'/></Link>
                    <Link to='/collection/playlists' className='text-link'>
                        <IconText name='Thư viện'Icon={LibraryMusicIcon} url='/collection'/>
                    </Link>
                    
                </div>    
                    <div className='sidebar-mid'>
                        <Link to='/playlist' className='text-link'>
                            <IconText name='Tạo playlist' Icon={AddToPhotosIcon} url='/playlist'/>
                        </Link>
                        <Link to='/tracks' className='text-link'>
                            <IconText name='Bài hát đã thích'Icon={FavoriteIcon} url='/tracks'/>
                        </Link>
                        
                        

                    </div>
                    
                
                    <div className='sidebar-bottom'>
                        
                    </div>
                
            </div>
    )
}


function filterFavou(arr){
    let i;
    const result = []
    for(i = 0 ; i<arr.length;i++){
        if(arr[i].playlist_name != 'Liked Song')
            result.push(arr[i])
    }
    return result
}