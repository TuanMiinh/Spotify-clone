import React, { Fragment } from 'react'

export default function PlayerDetails(props) {
    return (
        <Fragment>
                    {/* <h>{props.song.name}</h>
                    <p>{props.song.artist}</p> */}
                    <img src={props.song.img}/>
                <div className='song-detail' >
                    <h>{props.song.name}</h>
                    <p>{props.song.artist}</p>
                    
                </div>
        </Fragment>
    )
}
