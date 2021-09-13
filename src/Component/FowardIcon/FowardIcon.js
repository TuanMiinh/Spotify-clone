import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './FowardIcon.css'
export default function FowardIcon() {
    return (
        <div className='fowardicon'>
            <div className='fowardicon-first'>
                <ArrowBackIosIcon style={{ color: 'white',fontSize: 20 }}/>
            </div>
            <div className='fowardicon-second'>
                <ArrowForwardIosIcon style={{ color: 'white',fontSize: 20 }}/>
            </div>
            
        </div>
    )
}
