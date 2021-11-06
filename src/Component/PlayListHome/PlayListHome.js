import React from 'react';
import { Link } from 'react-router-dom';
import PlayList from './PlayList/PlayList';

export default function PlayListHome({dataPlayList}) {
    dataPlayList = convertObjectToJson(dataPlayList);
    
    
    return (
        <div className='playlisthome'>
        {

            
            dataPlayList.map((playlist =>{
                return(
                    <Link to={'/album/'+playlist[1].playlist_id} className='text-link'>
                        <PlayList playlist = {playlist[1]}/>
                    </Link>
                    )
}))  
            
            
        }
             
        

            </div>
    )
}

function convertObjectToJson(object){
    var result = [];

    for(var i in object)
        result.push([i, object[i]]);
    return result;
}
