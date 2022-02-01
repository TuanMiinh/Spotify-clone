import React, { useState } from 'react';
import {IconContext} from "react-icons";
import {BsFillPlayFill,
        BsFillPauseFill} from "react-icons/bs";
import  './AlbumsHover.css';
import b from './image/251809088_1633056763752680_4471930787292251240_n.jpg'

const AlbumsHover = ({image,name}) => {
    const [openIcon, setOpenIcon] = useState(false)

    return (

            <div className="albums-content-item">
                <div className="img-albums">
                    <img src={image}></img>
                </div>
                <div className={openIcon ? "icon-play-remain" : "icon-play" }>
                    <button className="icon-play__button" onClick={() => setOpenIcon(!openIcon)}>
                        <IconContext.Provider value={{ className: "react-play-icons" }}>
                            {!openIcon ? <BsFillPlayFill/> : <BsFillPauseFill /> } 
                        </IconContext.Provider>
                    </button>
                </div>
                <div className="content-albums">
                    <div className="name-albums">Tình ca Đức Đạt</div>
                    <div className="name-artist">{name}</div>
                </div>
            </div>

    );
};
// HAPPY NEW YEAR
export default AlbumsHover;