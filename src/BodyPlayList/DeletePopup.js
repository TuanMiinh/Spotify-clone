import React from 'react'
import { useHistory } from 'react-router';
import './BodyPlayList.css'

export default function DeletePopup({displayDelete,playlistID,token,onSubmit}) {
    const history = useHistory();
    const handleDelete = () =>{
        fetch('http://localhost:8080/api/playlist/'+playlistID,{
            method: 'DELETE',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization':token
                
            }
        })

        history.push("/collection/playlists")
        
        
    }

    return displayDelete?(
        <div className = 'deletePopup'>
            <h>Xóa ?</h>
            <p>Bạn không thể hủy thao tác này.</p>
            <div>
                <button className='deletePopup-button__first' onClick={onSubmit}>HỦY</button>
                <button className='deletePopup-button__second' onClick={handleDelete}>XÓA</button>
            </div>
        </div>
    ):""
}
