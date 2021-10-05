import React from 'react'
import LibraryBar from '../LibraryBar'
import './PodCast.css'
import { IconContext } from "react-icons"
import { MdPodcasts } from "react-icons/md"



export default function PodCast() {
    return (
        <div className='body'>
            <LibraryBar/> 

            <div className="podcast-container">
                <div className="icon-podcast">
                    <IconContext.Provider value={{ className: "react-podcast-icons" }}>
                        <MdPodcasts />
                    </IconContext.Provider>
                </div>
                <div className="follow-podcast">Follow your first podcast</div>
                <span>Follow podcasts you like by tapping the follow button.</span>
                <a className="find-podcast" href="#">find podcast</a>
            </div>
            
        </div>
    )
}
