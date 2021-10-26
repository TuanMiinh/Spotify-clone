import React from 'react'
import { setState,addPlayList,setCurrentSong } from '../HoldSong/songSlice';
import PauseCircleFilled from '@material-ui/icons/PauseCircleFilled';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { useDispatch,useSelector } from 'react-redux';
import { useState , useEffect } from 'react';

export default function IconPlay({playListID}) {
    const [listSong, setListSong] = useState([]);
    const isPlay = useSelector(state => state.playLists).isPlay
    const playListState = useSelector(state=> state.playLists).playListID

    useEffect(() => {
        fetch('http://localhost:8080/api/playlist/'+playListID)
            .then(respone => respone.json())
            .then(data => {
                setListSong(data.listSongs)
            });
    })
    const dispatch = useDispatch();
    const handleClick = ()=>{
        
        
        const action1 = setState({
            playListID : playListID,
            type:'button'
        });
        dispatch(action1)
    
        
        const action2 = addPlayList({
            playListID:playListID,
            listSong: sort_by_key(listSong,"song_id")
        })
        dispatch(action2)
        
        const action3 = setCurrentSong({
            songID: listSong[0].song_id
        })
        dispatch(action3)
            
        }
    return (
        
            <div>
                            <PauseCircleFilled style={{ color: '#1DB954',fontSize: 60, display:isPlay&&playListState==playListID?'block':'none' }} onClick={handleClick}/>
                            <PlayCircleFilledIcon style={{ color: '#1DB954',fontSize: 60,display:!isPlay||playListState!=playListID?'block':'none' }} onClick={handleClick}/>
                            
                        </div>
        
    )
}

function sort_by_key(array, key)
{
 return array.sort(function(a, b)
 {
  var x = a[key]; var y = b[key];
  return ((x < y) ? -1 : ((x > y) ? 1 : 0));
 });
}

