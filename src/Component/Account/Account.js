import React from 'react';
import './Account.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import { setToken } from '../HoldSong/songSlice';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';


export default function Account() {
    const token = useSelector(state => state.playLists).token
    const userInfo = useSelector(state => state.playLists).userInfo
    const dispatch = useDispatch()
    const history = useHistory();
    
    
    
    const handleLogOut = () =>{
        const action  = setToken({
            token: null
        })
            
        dispatch(action);
        
        history.push('/')
    }
    
    return (token && userInfo)?(
        // <div className='account' onClick={showExpand}>
        <div className='account'>
        <div className='account-img'>
            <img src='https://vnn-imgs-f.vgcloud.vn/2020/03/23/11/trend-avatar-12.jpg'></img>
        </div>
        <div className='account-text'>
            <p>{userInfo.user_name}</p>
        </div>
        <div className='account-expand' >
            <ExpandMoreIcon />
            <ul className='ulExpand'>
                <li>Tài khoản</li>
                <li>Hồ sơ</li>
                <li onClick={handleLogOut}>Đăng xuất</li>
            </ul>
        </div>
    </div>  
        
    ):(
    <Link to="/login" className='text-link'>
        <div className='account-login'>
            <div className='account-text'>
                <p>Log In</p>
            </div>
        </div>
    </Link>
    )
}

// function showExpand(){
//     setTimeout(() => {
//         const expand = document.getElementsByClassName('ulExpand');
//         if(expand[0].style.display == 'none')
//         {
//             expand[0].style.display ='block';
//         }else{
//             expand[0].style.display ='none';
//         }
        
//     }, 0);
    
// }
