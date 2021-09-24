import React from 'react'
import { setState,addPlayList } from '../HoldSong/songSlice';
import PauseCircleFilled from '@material-ui/icons/PauseCircleFilled';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { useDispatch,useSelector } from 'react-redux';

export default function IconPlay({playListID}) {

    const isPlay = useSelector(state => state.playLists).isPlay
    const playListState = useSelector(state=> state.playLists).listSongs.idd
    const dispatch = useDispatch();
    const handleClick = ()=>{
        
        
        const action1 = setState({
            playListID : playListID,
            type:'button'
        });
        dispatch(action1)
    
        
        const action2 = addPlayList({
            playListID:playListID
        })
        dispatch(action2)
        
            
        }
    return (
        
            <div>
                            <PauseCircleFilled style={{ color: '#1DB954',fontSize: 60, display:isPlay&&playListState==playListID?'block':'none' }} onClick={handleClick}/>
                            <PlayCircleFilledIcon style={{ color: '#1DB954',fontSize: 60,display:!isPlay||playListState!=playListID?'block':'none' }} onClick={handleClick}/>
                            
                        </div>
        
    )
}
