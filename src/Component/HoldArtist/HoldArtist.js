import React from 'react'
import './HoldArtist.css'


export default function HoldArtist({image , name }) {
    return (
        <div className ='holdArtist'>
            <img src={image}></img>
            <p>{name}</p>
            <p>Nghệ sĩ</p>
        </div>
    )
}