import React from 'react'
import { useState } from 'react';
import './LoginForm.css'
import a from "./image/Logo.png"
import {IconContext} from "react-icons";
import {FaSpotify} from "react-icons/fa"
import { event } from 'jquery';



export default function LoginForm() {
    
    const [login, setLogin] = useState(false)
    


    const handleLogin = (event) => {
        event.preventDefault();
        console.log(event.target.username.value);
        console.log(event.target.password.value);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.fullname.value);
        console.log(event.target.birthday.value);
        console.log(event.target.gender.value);
        console.log(event.target.email.value);
        console.log(event.target.username.value);
        console.log(event.target.password.value);
        console.log(event.target.passwordConfirm.value);
        
    }


    

    return (
        <div className='login-body'>
            <div className="hero">
                <div className="form-box">

                    <div className="title-spotify">
                        <img className="logo" src={a} alt="" />
                    </div>

                    <div className="button-box">
                        {!login ? <div id="btn"></div> : <div id="btn-1"></div>}
                        <button type="button" className="toggle-btn" onClick={() => setLogin(false)}>Log In</button>
                        <button type="button" className="toggle-btn" onClick={() => setLogin(true)}>Register</button>
                    </div>
                    
                    {!login ? <form id="login" className="input-group" action="" onSubmit={handleLogin}>
                        <input type="text" className="input-field" name = "username" placeholder="Username" required/>
                        <input type="password" className="input-field" name = "password" placeholder="Password" required/>
                        <input type="checkbox" className="check-box"/><span>Remember password</span>
                        <button type="submit" className="submit-btn" >Log in</button>
                    </form> : <form id="register" className="input-group" action="" onSubmit={handleSubmit}>
                        <input type="text" className="input-field" name="fullname" placeholder="Full-name" required/>
                        <div className="age">
                            <label>Age: </label>
                            <input type="date" className="input-field" name="birthday" placeholder="Age" required/>
                        </div>  
                        <div className="sex" >
                            <div className="input-sex">
                                <input type="radio" name="gender" id="" required /><label>Male</label>
                            </div>
                            <div className="input-sex">
                                <input type="radio" name="gender" id=""  required /><label>Female</label>
                            </div>
                            {/* <div className="input-sex">
                                <input type="radio" name="Another" id=""  required /><label>Another</label>
                            </div> */}
                        </div>
                        <input type="email" className="input-field" name = "email" placeholder="Email" required/>
                        <input type="text" className="input-field" name="username" placeholder="Username" required/>
                        <input type="password" className="input-field" name="password" placeholder="Password" required/>
                        <input type="password" className="input-field" name="passwordConfirm"placeholder="Confirm Password" required/>
                        <input type="checkbox" className="check-box" required/><span>I agree to the term & conditions</span>
                        <button type="submit" className="submit-btn" >Register</button>
                    </form>}
                    
                </div>
            </div>
        </div>
    )
}

    
