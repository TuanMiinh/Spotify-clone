import React from 'react'
import { useState,useEffect } from 'react';
import './LoginForm.css'
import a from "./image/Logo.png"
import { useDispatch } from 'react-redux';
import { setToken,setUserPlayList,setUserInfo , setFavourites} from '../Component/HoldSong/songSlice';
import { useHistory } from 'react-router';
import { data } from 'jquery';








export default function LoginForm() {
    
    const [login, setLogin] = useState(false)
    const dispatch = useDispatch();
    const history = useHistory();
    

    const fetchUserInfo = (token) =>{
        fetch('http://localhost:8080/api/user/get',{
                        headers:{
                            'Authorization':token
                        }
                    })
                        .then(respone => respone.json())
                        .then(data => {
                            const action = setUserInfo({
                                userInfo:data
                            })
                            dispatch(action)
        });  
    }

    const getFavoriteList = (playlist) =>{
        let i;
        for(i = 0 ; i <= playlist.length - 1 ; i++){
           if(playlist[i].playlist_name == 'Liked Song') {
                return playlist[i]
           }
                
                
        }
    }

    const getFavoriteListID = (list) =>{
        let j
        const result = []
        for(j = 0 ; j <= list.listSongs.length - 1 ; j++)
            result.push(list.listSongs[j].song_id)
        return result
    }

    

    const fetchUserPlayList = (token) =>{
        fetch('http://localhost:8080/api/playlist/',{
                        headers:{
                            'Authorization':token
                        }
                    })
                        .then(respone => respone.json())
                        .then(data => {
                            
                            const action = setUserPlayList({
                                userPlayList:data
                            })
                            dispatch(action)

                            const favoriteList = getFavoriteList(data)
                            
                            const action2 = setFavourites({
                                type:'SET-INFOR',
                                listSong:favoriteList
                            })
                            dispatch(action2)

                            const favoriteListID = getFavoriteListID(favoriteList)
                            const action3 = setFavourites({
                                type:'SET',
                                listSongID:favoriteListID
                            })
                            dispatch(action3)
        });  
    }


    const handleLogin = (event) => {
        event.preventDefault();
        
        fetch('http://localhost:8080/api/user/login',{
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify({
                "account_name":event.target.username.value ,
                "password": event.target.password.value
            })
        })
            .then(respone => respone.json())
            .then(data => {
                    
                if(data.token){
                    fetchUserInfo(data.token)
                    fetchUserPlayList(data.token)
                    const action  = setToken({
                        token: data.token
                    })
                    dispatch(action);
                    alert(data.status)
                    history.push("/");
                }else{
                    alert(data.status)
                }

            });


            
            
            
        
            

        
        
        
    }


    


    const handleSubmit = (event) => {
        event.preventDefault();
        if(event.target.password.value!=event.target.passwordConfirm.value){
            alert("Mật khẩu không khớp!")
        }else{
            alert("Vui lòng xác nhận email!")
            fetch('http://localhost:8080/api/user/register',{
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    
                },
                body: JSON.stringify({
                    "user_name": event.target.fullname.value,
                    "user_email": event.target.email.value,
                    "account": {
                        "account_name": event.target.username.value,
                        "password": event.target.password.value
                    },
                    "sex": event.target.gender.value,
                    "birthday": event.target.birthday.value
                })
            })
            .then(respone => respone.json())
            .then(data => {
                console.log(data)
                alert('Đăng ký thành công!')
                setLogin(false)
                
            })


            
            
            
        }
        
        
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
                                <input type="radio" name="gender" value="m" id="" required /><label>Male</label>
                            </div>
                            <div className="input-sex">
                                <input type="radio" name="gender" value="f" id=""  required /><label>Female</label>
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

    
