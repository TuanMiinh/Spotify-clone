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
                    <img src="https://scontent.fdad3-1.fna.fbcdn.net/v/t1.15752-9/243298851_522230275546573_9143131907016776528_n.png?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=L4uV-7ZpFqYAX8RaQbv&_nc_ht=scontent.fdad3-1.fna&oh=3908ccbbf7aad0c1e9f021a8f120b10c&oe=61852ED4"/>
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
                    <div className="name-artist">Phạm Doanh Thức</div>
                </div>
            </div>

    );
};

export default AlbumsHover;