import React from 'react'
import RecomSong from '../../Component/RecomListHome/RecomSong/RecomSong'
import LibraryBar from '../LibraryBar'
import './Style.css'

export default function Playlist() {
    return (
        <div className='body'>
            <LibraryBar/> 
            <div className = 'body-library'>
                <h>Playlist</h> 
                <div>
                    <div className='playlist-fouvor'>
                        <ul>
                            <li><h>Sam Tinnesz</h><p>Far From Home (The Raven)</p></li>
                            <li><h>Cameron and the Slumberknights</h><p>Old Jacinto</p></li>
                            <li><h>OHHYUK</h><p>A Little Girl</p></li>
                        </ul>
                        <div>
                            <h>Bài hát đã thích</h>
                            <p>254 bài hát đã thích</p>
                        </div>
                        

                    </div>
                    <RecomSong/>
                    <RecomSong/>
                    <RecomSong/>
                    <RecomSong/>
                </div>

                <List/>
                <List/>
                <List/>
                <List/>
                <List/>
                <List/>
                <List/>
                <List/>
                

                
                
            </div>
              
        </div>

        
    )
}

function List(){
    return (
                <div>
                    <RecomSong/>
                    <RecomSong/>
                    <RecomSong/>
                    <RecomSong/>
                    <RecomSong/>
                    <RecomSong/>
                </div>
    )
}
