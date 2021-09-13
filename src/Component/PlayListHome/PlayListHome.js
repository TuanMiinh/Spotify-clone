import React from 'react';
import { Link } from 'react-router-dom';
import PlayList from './PlayList/PlayList';

export default function PlayListHome({dataPlayList}) {
    return (
        <div className='playlisthome'>
        {

            dataPlayList.map((playlist =>{
                return(
                    <Link to='/album' className='text-link'>
                    <   PlayList playlist = {playlist}/></Link>
                    
                    
                
                    )
}))  
        }
             
        

            </div>
    )
}
