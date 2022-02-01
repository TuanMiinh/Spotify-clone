import React from 'react'
import LibraryBar from '../LibraryBar'
import './Author.css'
import AuthorHover from "../../Component/AuthorHover/AuthorHover";
import a from './image/245772355_4703218706396895_2645923233280716365_nn.jpg'
import b from './image/251809088_1633056763752680_4471930787292251240_n.jpg'


export default function Author() {

    return (
        <div className='body'>
            <LibraryBar/>
            <div className="main-view-container">
                <div className="contentspacing">
                    <div className="author-title">Artists</div>

                    <div className="author-content">

                    
                        <AuthorHover image = {a} name = 'Đàm Vĩnh Hưng'/>
                        <AuthorHover image = {b} name = 'Dot Blastrizer77'/>
                        <AuthorHover image = 'https://cdns-images.dzcdn.net/images/artist/3066767b915a02a29660cd647243859c/264x264.jpg' name = 'G-DRAGON'/>
                        <AuthorHover image = 'https://salt.tikicdn.com/cache/525x525/ts/product/41/12/bf/f0e06d4059dd3d7f5e89a1f7d21893c1.jpg' name = 'ROSÉ'/>
                        <AuthorHover image = 'https://i.scdn.co/image/ab6761610000f178c48716f91b7bf3016f5b6fbe' name = 'Sơn Tùng M-TP'/>
                        <AuthorHover image = 'https://i.scdn.co/image/ab6761610000e5ebd2e6780f1a921fb8bb1634a2' name = 'Jack - J97'/>

                    </div>

                </div>
            </div>
        </div>


    )
}


// const iconPlay = document.querySelector('.icon-play');
// const authorContentItem = document.querySelector('.author-content-item');

