import React from 'react';
import './BodyMain.css';
import FowardIcon from '../Component/FowardIcon/FowardIcon';
import Account from '../Component/Account/Account';
import PlayListHome from '../Component/PlayListHome/PlayListHome';
import RecomListHome from '../Component/RecomListHome/RecomListHome';
import dataPlayListHome from './dataPlayListHome';



export default function BodyMain() {

    
    
    const dataPLayList = split_data(dataPlayListHome,4);

    

    
    return (
        <div className='body'>
            <div className='bodymain-top'>
                <div className='body-bar'>
                    <FowardIcon/>
                    <div>
                        <Account/>
                    </div>
                </div>

                <div className='bodymain-fisrtlist'>
                    <h>Chào buổi chiều</h>
                    <div>
                        <PlayListHome dataPlayList = {dataPLayList[0]}/>
                        <PlayListHome dataPlayList = {dataPLayList[1]}/>
                    </div>
                </div>
            </div>
            <div className='bodymain-body'>
                <RecomListHome/>
                <RecomListHome/>
                <RecomListHome/>
                <RecomListHome/>
                <RecomListHome/>
                <RecomListHome/>

                
            </div>
        </div>
    )
}

function split_data(array, size)
{
    var i,j, temporary, chunk = size;
    var result = []
    for (i = 0,j = array.length; i < j; i += chunk) {
        temporary = array.slice(i, i + chunk);
        result.push(temporary)
    }

    return result;

}
