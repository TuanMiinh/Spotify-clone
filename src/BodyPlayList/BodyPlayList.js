import React, { useState } from 'react'
import FowardIcon from '../Component/FowardIcon/FowardIcon'
import Account from '../Component/Account/Account'
import './BodyPlayList.css'
import { IconContext } from "react-icons"
import {BsThreeDots,
        BsSearch,
        BsImageFill} from "react-icons/bs"
        

export default function BodyPlayList() {

    const [imgCv, setImgCv] = useState(null)

    const uploadImg = async (file) => {
        const imgBase = await convertImgToBase64(file);
        setImgCv(imgBase)
    }

    const convertImgToBase64 = (img) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(img);

            fileReader.onload = () => {
                resolve(fileReader.result)
            }
            
            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }

    return (
        <div className='body'>
            
                <div className= 'header'>
                    <div className = 'body-bar'>
                        <FowardIcon/>
                        <Account/>
                    </div>

                    <div className='header--info'>
                        <div className='header--img'>
                            <img src={imgCv} alt="" id="img" className="img" />
                            <input onChange={(e) => uploadImg(e.target.files[0])} id="upload-img" className="choose-img" type="file" accept="image/*" />
                            <div className="label">
                                <label htmlFor="upload-img" className="playlist-image-upload">
                                    <IconContext.Provider value={{ className: "react-imgFill-icons" }}>
                                        <BsImageFill/>
                                    </IconContext.Provider>
                                    Choose your photo
                                </label>
                            </div>
                        </div>
                        

                        <div className='header--content'>
                            <div className='signal'>Playlist</div>
                            <div className='title'>My Playlist</div>
                            <div className='username'>Yua Mikami</div>
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
