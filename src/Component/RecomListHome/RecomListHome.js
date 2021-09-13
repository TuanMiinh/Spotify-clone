import React from 'react';
import RecomSong from './RecomSong/RecomSong';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function RecomListHome() {
    return (
        <div className='recomlisthome'>
            
            <h>Dành cho bạn</h>
            <p>Thêm nhiều gợi ý hay hơn khi bạn nghe nhiều hơn</p>
            <div>
                <Link to='/playlist/1' className='text-link'>
                    <RecomSong/>
                </Link>
                <Link to='/playlist/1' className='text-link'>
                    <RecomSong/>
                </Link>
                <Link to='/playlist/1' className='text-link'>
                    <RecomSong/>
                </Link>
                <Link to='/playlist/1' className='text-link'>
                    <RecomSong/>
                </Link>
                <Link to='/playlist/1' className='text-link'>
                    <RecomSong/>
                </Link>
                <Link to='/playlist/1' className='text-link'>
                    <RecomSong/>
                </Link>
                {/* <RecomSong/>
                <RecomSong/>
                <RecomSong/>
                <RecomSong/>
                <RecomSong/>
                <RecomSong/> */}
            </div>
            
        </div>
    )
}
