import React from 'react'
import LibraryBar from '../LibraryBar'
import "./Album.css"
import AlbumsHover from "../../Component/AlbumsHover/AlbumsHover";

export default function Album() {
    return (
        <div className='body'>
            <LibraryBar/> 
            <div className="main-view-container">
                <div className="contentspacing">
                    <div className="albums-title">Albums</div>

                        <div className="albums-content">

                            <AlbumsHover />
                            <AlbumsHover />
                            <AlbumsHover />
                            <AlbumsHover />
                            <AlbumsHover />
                            <AlbumsHover />
                            <AlbumsHover />
                            <AlbumsHover />

                        </div>

                </div>
            </div>
        </div>
    )
}
