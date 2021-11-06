import React from 'react';
import './Account.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Account() {
    const token = null;
    
    return token == null?(
        <Link to="/login" className='text-link'>
            <div className='account-login'>
                <div className='account-text'>
                    <p>Log In</p>
                </div>
            </div>
        </Link>
        
    ):(
        <div className='account' onClick={showExpand}>
            <div className='account-img'>
                <img src='https://vnn-imgs-f.vgcloud.vn/2020/03/23/11/trend-avatar-12.jpg'></img>
            </div>
            <div className='account-text'>
                <p>Tuấn Minh</p>
            </div>
            <div className='account-expand' >
                <ExpandMoreIcon />
                <ul className='ulExpand'>
                    <li>Tài khoản</li>
                    <li>Hồ sơ</li>
                    <li>Nâng cấp lên Premium</li>
                    <li>Đăng xuất</li>
                </ul>
            </div>
        </div> 
    )
}

function showExpand(){
    setTimeout(() => {
        const expand = document.getElementsByClassName('ulExpand');
        if(expand[0].style.display == 'none')
        {
            expand[0].style.display ='block';
        }else{
            expand[0].style.display ='none';
        }
        
    }, 0);
    
}
