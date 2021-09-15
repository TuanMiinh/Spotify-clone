import React from 'react';
import RecomSong from './RecomSong/RecomSong';
import {Link} from "react-router-dom";
import data from '../Footer/music-list2'

export default function RecomListHome() {
    return (
        <div className='recomlisthome'>
            
            <h>Dành cho bạn</h>
            <p>Thêm nhiều gợi ý hay hơn khi bạn nghe nhiều hơn</p>
            <div>
                <Link to={'/playlist/'+data[0].idd} className='text-link'>
                    <RecomSong/>
                </Link>
                <Link to={'/playlist/'+data[1].idd} className='text-link'>
                    <RecomSong/>
                </Link>
                <Link to={'/playlist/'+data[2].idd} className='text-link'>
                    <RecomSong/>
                </Link>
                <Link to={'/playlist/'+data[2].idd} className='text-link'>
                    <RecomSong/>
                </Link>
                <Link to={'/playlist/'+data[0].idd} className='text-link'>
                    <RecomSong/>
                </Link>
                <Link to={'/playlist/'+data[1].idd} className='text-link'>
                    <RecomSong/>
                </Link>
                
            </div>
            
        </div>
    )
}
