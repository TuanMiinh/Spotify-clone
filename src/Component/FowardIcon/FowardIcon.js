import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {IconContext} from "react-icons";
import {IoIosArrowForward, IoIosArrowBack} from "react-icons/io"
import './FowardIcon.css'
export default function FowardIcon() {
    return (
        <div className='fowardicon'>
            
            <div className='arrow-icon'>
                <IconContext.Provider value={{ className: "arrow-back" }}>
                    <IoIosArrowBack />
                </IconContext.Provider>
                
            </div>
            <div className='arrow-icon'>
                <IconContext.Provider value={{ className: "arrow-forward" }}>
                    <IoIosArrowForward />
                </IconContext.Provider>
            </div>
            
        </div>
    )
}
