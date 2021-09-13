import React from 'react'
import SongFind from './SongFind/SongFind'

export default function ListFindAll() {
    return (
        <div className='listfindall'>
            <h>Duyệt tìm tất cả</h>
            <div>
                <SongFind/>
                <SongFind/>
                <SongFind/>
                <SongFind/>
                <SongFind/>
                <SongFind/>
            </div>
        </div>
    )
}
