import React from 'react'
import './BodyPlayList.css'
import CloseIcon from '@mui/icons-material/Close';
export default function ModifyPopup({displayPopup,playlist, onSubmit , playlistID, token}) {

    const handleSubmit = (event) =>{
        event.preventDefault();
        fetch('http://localhost:8080/api/playlist/',{
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization':token
                
            },
            body: JSON.stringify({
                "playlist_id": playlistID,
                "owner":playlist.owner,
                "playlist_name": event.target.playlist_name.value,
                "playlist_duration": 1000,
                "playlist_image":playlist.playlist_image,
                "listSongs":playlist.listSongs
                
            })
        })
        
        
    }

    return displayPopup?(
        <form className = "modifyPopup" onSubmit={handleSubmit}>
            <div className='modifyPopup__top'>
                <h>Edit Details</h>
                <CloseIcon onClick={onSubmit}/>
            </div>
            
            <div className = "modifyPopup-content">
                <div className='modifyPopup-content__img'></div>
                <div className='modifyPopup-content__text'>
                    <div className='modifyPopup-content__firstInput'>
                        {/* <input type='text' name='playlist_name' value={playlist_name} ></input> */}
                        <input type='text' name='playlist_name' ></input>
                    </div>
                    <div className='modifyPopup-content__secondInput'>
                        <input placeholder='Add an optional description'></input>
                    </div>
                </div>
            </div>
            <button type='submit' value='Submit'>Lưu</button>
            <p>Bằng cách tiếp tục, bạn đồng ý cho phép Spotify truy cập vào hình ảnh bạn đã chọn để tải lên. Vui lòng đảm bảo bạn có quyền tải lên hình ảnh.</p>
        </form>
    ):""
}
