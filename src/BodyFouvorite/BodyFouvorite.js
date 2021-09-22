import React from 'react'
import FowardIcon from '../Component/FowardIcon/FowardIcon'
import Account from '../Component/Account/Account'
import './BodyFouvorite.css'
import { IconContext } from "react-icons";
import {BsHeart,
        BsClock} from "react-icons/bs";
import {BiPlay} from "react-icons/bi"

export default function BodyFouvorite() {
    return (
        <div className = 'body'>

            <div className='header header-favourite-song'>
                <div className = 'body-bar'>
                    <FowardIcon/>
                    <Account/>
                </div>

                <div className='header--info'>
                    <div className='header--img img__gradient'>
                        <IconContext.Provider value={{ className: "react-heart-icons" }}>
                            <BsHeart/>
                        </IconContext.Provider>
                    </div>

                    <div className='header--content'>
                        <div className='signal'>Playlist</div>
                        <div className='title'>Liked songs</div>
                        <div className='username'>Tuấn Minh</div>
                    </div>
                </div>
            </div>

            <div className="body__favlist">
                <div className="body__favlist--content ">
                    <div className="play-icon" >
                        <IconContext.Provider value={{ className: "react-play-icons" }}>
                            <BiPlay />
                        </IconContext.Provider>
                    </div>
                </div>

                {/* Songs are liked */}
                <div className="sonngs">
                    <div className="songs__title">
                        <div>#</div>
                        <div className="order">Title</div>
                        <div className="album">Album</div>
                        <div className="view">Views</div>
                        <div className="time"><BsClock/></div>
                    </div>

                    <div className="songs__list">
                        <div className="songs__list--item">
                            <div>1</div>
                            <div className="title">
                                <img src="http://st.cdjapan.co.jp/pictures/l/09/13/UPCH-5978.jpg" alt="" />
                                <div className="song-name">Senko no Hathaway</div>
                            </div>
                            <div>Alexandros</div>
                            <div>1000000</div>
                            <div>4:25</div>
                        </div>

                        <div className="songs__list--item">
                            <div>2</div>
                            <div className="title">
                                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c7156d1c-515c-4a5d-ab77-a856fedda897/denschi-38caba05-16ff-4ad3-b0b0-4dc37ee7af17.png/v1/fill/w_600,h_600,strp/kamen_rider_revice_by_markolios_denschi-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAwIiwicGF0aCI6IlwvZlwvYzcxNTZkMWMtNTE1Yy00YTVkLWFiNzctYTg1NmZlZGRhODk3XC9kZW5zY2hpLTM4Y2FiYTA1LTE2ZmYtNGFkMy1iMGIwLTRkYzM3ZWU3YWYxNy5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.gFwJd3NgJArmVqrtbuHG0sACV-Qy9is203ccs7NYT4w" alt="" />
                                <div className="song-name">LiveDevil</div>
                            </div>
                            <div>Kamen rider Revice</div>
                            <div>782680</div>
                            <div>1:21</div>
                        </div>

                        <div className="songs__list--item">
                            <div>3</div>
                            <div className="title">
                                <img src="https://www.gamerevolution.com/assets/uploads/2021/04/86-EIGHTY-SIX-Episode-2-Release-Date-and-Time-1280x720.jpg" alt="" />
                                <div className="song-name">Hands up to the sky</div>
                            </div>
                            <div>SawanoHiroyuki[nZk]</div>
                            <div>165161656000</div>
                            <div>3:32</div>
                        </div>

                        <div className="songs__list--item">
                            <div>4</div>
                            <div className="title">
                                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/0bc8bee6-d09d-4f5b-b7f3-96bacb118cc0/dekfu7r-8ac6a34e-e1b0-4fce-b7d7-a28fc2af3fa8.png" alt="" />
                                <div className="song-name">Trigger</div>
                            </div>
                            <div>Ultraman Trigger</div>
                            <div>64489613546</div>
                            <div>3:58</div>
                        </div>

                        <div className="songs__list--item">
                            <div>5</div>
                            <div className="title">
                                <img src="https://avatar-ex-swe.nixcdn.com/song/2021/01/15/5/b/0/e/1610674256555_640.jpg" alt="" />
                                <div className="song-name">STORYSEEKER</div>
                            </div>
                            <div>STEREO DIVE FOUNDATION</div>
                            <div>8796315612</div>
                            <div>3:59</div>
                        </div>
                    </div>
                </div>

            </div>
                
        </div>
    )
}
