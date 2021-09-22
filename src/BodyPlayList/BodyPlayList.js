import React from 'react'
import FowardIcon from '../Component/FowardIcon/FowardIcon'
import Account from '../Component/Account/Account'
import './BodyPlayList.css'
import { IconContext } from "react-icons";
import {BsThreeDots,
        BsSearch} from "react-icons/bs"

export default function BodyPlayList() {
    return (
        <div className='body'>
            <div className='header'>
                <div className = 'body-bar'>
                    <FowardIcon/>
                    <Account/>
                </div>

                <div className='header--info'>
                    <div className='header--img'>
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c7156d1c-515c-4a5d-ab77-a856fedda897/denschi-38caba05-16ff-4ad3-b0b0-4dc37ee7af17.png/v1/fill/w_600,h_600,strp/kamen_rider_revice_by_markolios_denschi-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAwIiwicGF0aCI6IlwvZlwvYzcxNTZkMWMtNTE1Yy00YTVkLWFiNzctYTg1NmZlZGRhODk3XC9kZW5zY2hpLTM4Y2FiYTA1LTE2ZmYtNGFkMy1iMGIwLTRkYzM3ZWU3YWYxNy5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.gFwJd3NgJArmVqrtbuHG0sACV-Qy9is203ccs7NYT4w" alt="" />
                    </div>

                    <div className='header--content'>
                        <div className='signal'>Playlist</div>
                        <div className='title'>My Playlist</div>
                        <div className='username'>Tuấn Minh</div>
                    </div>
                </div>
            </div>
            
            <div className="body__playlist">
                <div className="body__playlist--content ">
                    <div className="dot-icon" >
                        <IconContext.Provider value={{ className: "react-dot-icons" }}>
                            <BsThreeDots />
                        </IconContext.Provider>
                        <ul class="dropdown-content" id="myDropdown">
                            <li>Add</li>
                            <li>Rename</li>
                            <li>Delete</li>
                            <li>Share</li>
                        </ul>
                    </div>

                    <div className="body__playlist--search ">
                        <div className="playlist--title">
                            Please find the content for your list
                        </div>
                        <div className="playlist--search">
                            <IconContext.Provider value={{ className: "react-search-icons" }}>
                                <BsSearch />
                            </IconContext.Provider>
                            <input type="text" className="search--box" placeholder="Search song"/>
                            <input type="submit" value="Search" className="submit--box"/>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}
