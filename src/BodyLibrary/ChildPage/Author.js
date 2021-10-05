import React from 'react'
import LibraryBar from '../LibraryBar'
import './Author.css'
import { IconContext } from "react-icons";
import {BsFillPlayFill} from "react-icons/bs"
import AuthorHover from "../../Component/AuthorHover/AuthorHover";



export default function Author() {

    return (
        <div className='body'>
            <LibraryBar/>
            <div className="main-view-container">
                <div className="contentspacing">
                    <div className="author-title">Artists</div>

                    <div className="author-content">

                        <AuthorHover/>
                        <AuthorHover/>
                        <AuthorHover/>
                        <AuthorHover/>
                        <AuthorHover/>


                    </div>

                </div>
            </div>
        </div>


    )
}


// const iconPlay = document.querySelector('.icon-play');
// const authorContentItem = document.querySelector('.author-content-item');

