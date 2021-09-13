import React from 'react'
import MostSong from './MostSong/MostSong'

export default function MostFavourite() {
    return (
        <div className='mostfavourite'> 
            <h>Thể loại bạn nghe nhiều nhất</h>
            <div>
                <MostSong/>
                <MostSong/>
                <MostSong/>
            </div>
        </div>
    )
}
