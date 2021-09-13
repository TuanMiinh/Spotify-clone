import React from 'react'
import FowardIcon from '../Component/FowardIcon/FowardIcon'
import Account from '../Component/Account/Account'
export default function BodyFouvorite() {
    return (
        <div className='body'>
            <div className = 'body-bar'>
                <FowardIcon/>
                <Account/>
            </div>
            <>
                <h1>THIS IS FAVOURITE</h1>
            </>
        </div>
    )
}
