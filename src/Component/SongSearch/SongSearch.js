import React from 'react'
import './SongSearch.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { setState,setCurrentSong,addPlayList,setSongIndex } from '../HoldSong/songSlice';
import { useDispatch ,useSelector } from 'react-redux';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useEffect , useState } from 'react';
import PauseIcon from '@mui/icons-material/Pause';
export default function SongSearch({song}) {

    const [playlist,setPlaylist] = useState([]);
    const dispatch = useDispatch()
    const token = useSelector(state => state.playLists).token
    const songID = useSelector(state => state.playLists).songID
    const isPlay = useSelector(state => state.playLists).isPlay
    useEffect(() => {
        fetch('http://localhost:8080/api/playlist/',{
            headers:{
                    'Authorization':token
            }
        })
            .then(respone => respone.json())
            .then(data => {
                setPlaylist(filterFavou(data))

            });
    })

    const addToPlayList = (playlist_id) => {
        fetch('http://localhost:8080/api/playlist/'+playlist_id+'/'+song.song_id,{
            method:'POST',
            headers:{
                'Authorization':token
            }
        })
            .then(respone => respone.json())
            .then(data => console.log(data))
        alert('Đã thêm bài hát vào playlist của bạn')
    }

    const handleClick = ()=>{

        const action1 = setState({
            type:'search',
            songID:song.song_id
        })

        dispatch(action1);

        const action2 = setCurrentSong({
            current:0,
            songID:song.song_id
        });
        dispatch(action2);


        const action3 = addPlayList({
            listSong : [song]
            
        })
        

            dispatch(action3)
        
        
        const action4 = setSongIndex({
            song_id : song.song_id
        })
        
        dispatch(action4)
    }
    const handlePause = () =>{
        const action1 = setState({
            type:'search',
            songID:song.song_id
        })

        dispatch(action1);
    }

    
    return (
        <div className={song.song_id==songID?'songsearch-active':'songsearch'}> 
        <div>
            <div>
                <img src={song.song_image}></img>
                <div>
                    <PlayArrowIcon onClick = {handleClick} style={{display: song.song_id!=songID||(song.song_id==songID&&!isPlay)?'block':'none' }}/>
                    <PauseIcon onClick = {handlePause} style={{display: isPlay&&song.song_id==songID?'block':'none' }}/>
                </div>
            </div>
            
            <div>
                <p>{song.song_name}</p>
                <p>{song.artist[0].artist_name}</p>
            </div>
        </div>
            <div className='songsearch-second'>
                <FavoriteBorderIcon/>
                <p>3:45</p>
                <div className = 'songsearch-second__expand'>
                    <MoreHorizIcon/>
                    <ul>
                        <li >Thêm vào danh sách chờ</li>
                        <li className='li-expand'>
                            Thêm vào danh sách phát
                            <ArrowRightIcon/>
                            <ul>
                                {
                                    playlist.map((list) =>{
                                        return <li onClick={() => {addToPlayList(list.playlist_id)}}>{list.playlist_name}</li>
                                    })
                                }
                            </ul>
                        </li>
                        <li>Chia sẻ</li>
                    </ul>
                </div>
            </div>
           
        </div>
    )
}

function filterFavou(arr){
    let i;
    const result = []
    for(i = 0 ; i<arr.length;i++){
        if(arr[i].playlist_name != 'Liked Song')
            result.push(arr[i])
    }
    return result
}