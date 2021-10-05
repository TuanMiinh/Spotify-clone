import React from 'react'
import LibraryBar from '../LibraryBar'
import './Author.css'
import { IconContext } from "react-icons";
import {BsFillPlayFill} from "react-icons/bs"

export default function Author() {
    return (
        <div className='body'>
            <LibraryBar/> 
            <div className="main-view-container">
                <div className="contentspacing">
                    <div className="author-title">Artists</div>

                    <div className="author-content">
                        {/* List-Artists */}
                        <div className="author-content-item">
                            <div className="img-artist">
                                <img src="https://pbs.twimg.com/media/EEM72g-XkAUNo3C.jpg" alt="" />
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

                        <div className="author-content-item">
                            <div className="img-artist">
                                <img src="https://pbs.twimg.com/media/EEM72g-XkAUNo3C.jpg" alt="" />
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

                        <div className="author-content-item">
                            <div className="img-artist">
                                <img src="https://pbs.twimg.com/media/EEM72g-XkAUNo3C.jpg" alt="" />
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

                        <div className="author-content-item">
                            <div className="img-artist">
                                <img src="https://pbs.twimg.com/media/EEM72g-XkAUNo3C.jpg" alt="" />
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

                        <div className="author-content-item">
                            <div className="img-artist">
                                <img src="https://pbs.twimg.com/media/EEM72g-XkAUNo3C.jpg" alt="" />
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

                        <div className="author-content-item">
                            <div className="img-artist">
                                <img src="https://pbs.twimg.com/media/EEM72g-XkAUNo3C.jpg" alt="" />
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

                        <div className="author-content-item">
                            <div className="img-artist">
                                <img src="https://pbs.twimg.com/media/EEM72g-XkAUNo3C.jpg" alt="" />
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

                        <div className="author-content-item">
                            <div className="img-artist">
                                <img src="https://pbs.twimg.com/media/EEM72g-XkAUNo3C.jpg" alt="" />
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

                        <div className="author-content-item">
                            <div className="img-artist">
                                <img src="https://pbs.twimg.com/media/EEM72g-XkAUNo3C.jpg" alt="" />
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


                    </div>

                </div>
            </div>
        </div>
    )
}


const iconPlay = document.querySelector('.icon-play');
const authorContentItem = document.querySelector('.author-content-item');

