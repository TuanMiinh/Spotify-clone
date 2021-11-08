import React from 'react'
import './SongFound.css'

export default function SongFound({song,playlistID,token}) {


    const handleAdd = () =>{
        fetch('http://localhost:8080/api/playlist/'+playlistID+'/'+song.song_id,{
                method: 'POST',
                headers:{
                    'Authorization':token
                }
            });
        
        
        
    }

    return (
        <div className='songfound'>
            <div className='songfound-img'>
                <img src={song.song_image}></img>
                <p>{song.song_name}</p>
            </div>
            
            <p>{song.artist[0].artist_name}</p>
            
            <button onClick = {handleAdd}>Thêm</button>
            
        </div>
    )
}
