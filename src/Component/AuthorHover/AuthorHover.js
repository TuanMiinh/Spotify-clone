import React from 'react';
import {IconContext} from "react-icons";
import {BsFillPlayFill} from "react-icons/bs";
import  './Author.css';

const AuthorHover = () => {
    return (

            <div className="author-content-item">
                <div className="img-artist">
                    {/*<img src="https://pbs.twimg.com/media/EEM72g-XkAUNo3C.jpg" alt="" />*/}
                    <img src="https://img.insight.co.kr/static/2018/01/01/700/6ykxprl6d7xciyfxdpod.jpg"/>
                </div>
                <div className="icon-play">
                    <button className="icon-play__button">
                        <IconContext.Provider value={{ className: "react-play-icons" }}>
                            <BsFillPlayFill/>
                        </IconContext.Provider>
                    </button>
                </div>
                <div className="content-artist">
                    <div className="name-artist">Hiroyuki Sawano</div>
                    <div className="artist-description">Artist</div>
                </div>
            </div>

    );
};

export default AuthorHover;