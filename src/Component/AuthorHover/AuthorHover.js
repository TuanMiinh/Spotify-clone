import React, { useState } from 'react';
import {IconContext} from "react-icons";
import {BsFillPlayFill,
        BsFillPauseFill} from "react-icons/bs";
import  './Author.css';
import b from './image/251809088_1633056763752680_4471930787292251240_n.jpg'

const AuthorHover = ({image,name}) => {
    const [openIcon, setOpenIcon] = useState(false)

    return (

            <div className="author-content-item">
                <div className="img-artist">
                    <img src={image}></img>
                </div>
                <div className={openIcon ? "icon-play-remain" : "icon-play" }>
                    <button className="icon-play__button" onClick={() => setOpenIcon(!openIcon)}>
                        <IconContext.Provider value={{ className: "react-play-icons" }}>
                            {!openIcon ? <BsFillPlayFill/> : <BsFillPauseFill /> } 
                        </IconContext.Provider>
                    </button>
                </div>
                <div className="content-artist">
                    <div className="name-artist">{name}</div>
                    <div className="artist-description">Artist</div>
                </div>
            </div>

    );
};

export default AuthorHover;