import React, { useState } from 'react';
import {IconContext} from "react-icons";
import {BsFillPlayFill,
        BsFillPauseFill} from "react-icons/bs";
import  './AlbumsHover.css';


const AlbumsHover = () => {
    const [openIcon, setOpenIcon] = useState(false)

    return (

            <div className="albums-content-item">
                <div className="img-albums">
                    {/*<img src="https://pbs.twimg.com/media/EEM72g-XkAUNo3C.jpg" alt="" />*/}
                    <img src="https://scontent.fhan5-8.fna.fbcdn.net/v/t31.18172-8/30052113_207698366486031_1199681115525341302_o.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=EPBJOnmJSr4AX8b1YxR&_nc_ht=scontent.fhan5-8.fna&oh=eae29faff0df29097ed1af6e02d093ca&oe=61833DB0"/>
                </div>
                <div className={openIcon ? "icon-play-remain" : "icon-play" }>
                    <button className="icon-play__button" onClick={() => setOpenIcon(!openIcon)}>
                        <IconContext.Provider value={{ className: "react-play-icons" }}>
                            {!openIcon ? <BsFillPlayFill/> : <BsFillPauseFill /> } 
                        </IconContext.Provider>
                    </button>
                </div>
                <div className="content-albums">
                    <div className="name-albums">Tình ca của Thức</div>
                    <div className="albums-description">Artist</div>
                </div>
            </div>

    );
};

export default AlbumsHover;