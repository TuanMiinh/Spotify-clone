import React from 'react'
import { useState } from 'react';
import './LoginForm.css'
import {IconContext} from "react-icons";
import {FaUserCircle,
        FaSpotify} from "react-icons/fa"
import {RiLockPasswordFill} from "react-icons/ri"



export default function LoginForm() {
    
    const [login, setLogin] = useState(false)

    return (
        <div className='login-body'>
            <div className="hero">
                <div className="form-box">

                    <div className="title-spotify">
                        <IconContext.Provider value={{ className: "react-spotify-icons" }}>
                            <FaSpotify />
                        </IconContext.Provider>
                        <div className="title">Spotify</div>
                    </div>

                    <div className="button-box">
                        {!login ? <div id="btn"></div> : <div id="btn-1"></div>}
                        <button type="button" className="toggle-btn" onClick={() => setLogin(false)}>Log In</button>
                        <button type="button" className="toggle-btn" onClick={() => setLogin(true)}>Register</button>
                    </div>
                    
                    {!login ? <form id="login" className="input-group" action="">
                        <input type="text" className="input-field" placeholder="Username" required/>
                        <input type="password" className="input-field" placeholder="Password" required/>
                        <input type="checkbox" className="check-box"/><span>Remember password</span>
                        <button type="submit" className="submit-btn">Log in</button>
                    </form> : <form id="register" className="input-group" action="">
                        <input type="text" className="input-field" placeholder="Full-name" required/>
                        <div className="age">
                            <label>Age: </label>
                            <input type="date" className="input-field" placeholder="Age" required/>
                        </div>  
                        <div className="sex">
                            <div className="input-sex">
                                <input type="radio" name="Male" id="" required /><label>Male</label>
                            </div>
                            <div className="input-sex">
                                <input type="radio" name="Male" id=""  required /><label>Female</label>
                            </div>
                            <div className="input-sex">
                                <input type="radio" name="Another" id=""  required /><label>Another</label>
                            </div>
                        </div>
                        <input type="email" className="input-field" placeholder="Gmail" required/>
                        <input type="text" className="input-field" placeholder="Username" required/>
                        <input type="password" className="input-field" placeholder="Password" required/>
                        <input type="password" className="input-field" placeholder="Repeat Password" required/>
                        <input type="checkbox" className="check-box"/><span>I agree to the term & conditions</span>
                        <button type="submit" className="submit-btn">Register</button>
                    </form>}
                    
                </div>
            </div>
        </div>
    )
}

    
