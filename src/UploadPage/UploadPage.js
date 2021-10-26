import React, { useState } from 'react'
import './UploadPage.css'
import a from "./image/Logo.png"
import FowardIcon from '../Component/FowardIcon/FowardIcon'
import Account from '../Component/Account/Account'
import {IconContext} from "react-icons"
import {IoIosArrowDown} from "react-icons/io"
import {BsImageFill} from "react-icons/bs"

export default function UploadPage() {

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
            <div className = "body-upload">
                {/* Header Upload Page */}
                <div className="header-upload-page">
                    <div className="foward-icon">
                        <FowardIcon/>
                    </div>
                    <img className="logo" src={a} alt="" />
                    <div className="account-icon">
                        <Account/>
                    </div>
                </div>
    
                {/* Upload */}
                <div className="upload-part">
                    <div className="upload-box">
    
                        <div className="upload-img-box">
                            <div className="img-holder">
                                <img src={imgCv} alt="" id="img" className="img" />
                            </div>
                            <input onChange={(e) => uploadImg(e.target.files[0])} id="upload-img" className="choose-img" type="file" accept="image/*" />
                            <div className="label">
                                <label htmlFor="upload-img" className="image-upload">
                                    <IconContext.Provider value={{ className: "react-imgFill-icons" }}>
                                        <BsImageFill/>
                                    </IconContext.Provider>
                                    Choose your photo
                                </label>
                            </div>
                        </div>
                        
                        <div className="info-song">
                            {/* Title */}
                            <div className="title-song-box">
                                <div className="title-song">Title</div>
                                <div className="input-description">
                                    <input className="name-song" type="text" placeholder="Name of song" required/>
                                </div>
                            </div>
                            {/* Genre */}
                            <div className="genre-song-box">
                                <div className="genre-song">Genre</div>
                                <div className="selector">
                                    <div id="selectField">
                                        <p id="selectText">Choose one</p>
                                        <IconContext.Provider value={{ className: "react-arrowdown-icons" }}>
                                            <IoIosArrowDown/>
                                        </IconContext.Provider>
                                    </div>
                                    <div className="dropdown-contents" id="list">
                                        <li className="options">Ambient</li>
                                        <li className="options">Alternative Rock</li>
                                        <li className="options">Classical</li>
                                        <li className="options">Country</li>
                                        <li className="options">Dance & EDM</li>
                                        <li className="options">Dancehall</li>
                                        <li className="options">Deep House</li>
                                        <li className="options">Disco</li>
                                        <li className="options">Drum & Bass</li>
                                        <li className="options">Dubstep</li>
                                        <li className="options">Electronic</li>
                                        <li className="options">Folk & Singer-Songwriter</li>
                                        <li className="options">Hiphop & Rap</li>
                                        <li className="options">House</li>
                                        <li className="options">Indie</li>
                                        <li className="options">Jazz & Blues</li>
                                        <li className="options">Latin</li>
                                        <li className="options">Metal</li>
                                        <li className="options">Piano</li>
                                        <li className="options">Pop</li>
                                        <li className="options">R&B % Soul</li>
                                        <li className="options">Reggae</li>
                                        <li className="options">Reggaeton</li>
                                        <li className="options">Rock</li>
                                        <li className="options">Soundtrack</li>
                                        <li className="options">Techno</li>
                                        <li className="options">Trance</li>
                                        <li className="options">Trap</li>
                                        <li className="options">Triphop</li>
                                        <li className="options">World</li>
                                    </div>
                                </div>
                            </div>
                            {/* Artist */}
                            <div className="artist-song-box">
                                <div className="artist-song">Artist</div>
                                <div className="input-description">
                                    <input className="upload-name-artist" type="text" placeholder="Name of artist" required/>
                                </div>
                            </div>
                            {/* Upload Song */}
                            <div className="upload-song-box">
                                <div className="upload-title">Upload song</div>
                                <div className="input-description">
                                    <label for="file-upload" class="custom-file-upload">
                                        Upload File
                                    </label>
                                    <input id="file-upload" type="file"/>
                                </div>
                            </div>
                            {/* Song Duration */}
                            <div className="duration-song-box">
                                <div className="duration-song">Song Duration</div>
                                <div className="duration-box">
                                    <input className="time-song" type="time" />
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="submit">
                        <div className="upload-now">Upload now</div>
                    </div>
                </div>
            </div>    
        )
    
}
