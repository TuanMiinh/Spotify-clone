import React from 'react'
import './HoldSong.css'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { useDispatch } from 'react-redux';
import { setCurrentSong,setState,addPlayList ,setSongIndex , setFavourites} from './songSlice';
import { useSelector } from 'react-redux';
import PauseIcon from '@material-ui/icons/Pause';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useState , useEffect } from 'react';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

export default function HoldSong({song,index,playListID,canRemove}) {

    const [listSong, setListSong] = useState([]);
    const [isFavourite , setIsFavourite] = useState(useSelector(state => state.playLists).favouriteListID.indexOf(song.song_id) > -1);
    const token = useSelector(state => state.playLists).token
    const favouriteListID = useSelector(state => state.playLists).favouriteListInfo.playlist_id
    useEffect(() => {
        fetch('http://localhost:8080/api/playlist/'+playListID,{
            headers:{
                'Authorization':token
            }
        })
            .then(respone => respone.json())
            .then(data => {
                setListSong(data.listSongs)
            });
    },[])

    

   const dispatch = useDispatch();

   
   const handleClick = ()=>{

        const action1 = setState({
            currentSong:index-1,
            playListID:playListID,
            type:'none-button'
        })

        dispatch(action1);

        const action2 = setCurrentSong({
            current:index-1,
            songID:song.song_id
        });
        dispatch(action2);


        // if(!isPlay){
        // const action3 = addPlayList({
        //     playListID : playListID,
        //     listSong : sort_by_key(listSong,"song_id")
        // })
        
        
        //     dispatch(action3)
        // }

        const action3 = addPlayList({
            playListID : playListID,
            listSong : listSong
            
        })
        

            dispatch(action3)
        
        
        const action4 = setSongIndex({
            song_id : song.song_id
        })
        
        dispatch(action4)
    }
    
    const handleLike = () =>{
        alert("Added to your favourite list !")
        console.log(song.song_id)
        fetch('http://localhost:8080/api/playlist/'+favouriteListID+'/'+song.song_id, {
                method: 'POST',
                headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization':token
                        },
                
        })
        
        const action = setFavourites({
            type:'ADD',
            song: song 
        })

        dispatch(action)

        setIsFavourite(!isFavourite)

       
        
        
    }

    const handleUnLike = () =>{
        alert("Removed from your favourite list !")
        console.log(song.song_id)
        fetch('http://localhost:8080/api/playlist/'+favouriteListID+'/'+song.song_id, {
                method: 'DELETE',
                headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization':token
                        },
                
        })
        
        const action = setFavourites({
            type:'REMOVE',
            song: song 
        })

        dispatch(action)

        setIsFavourite(!isFavourite)
        
       
        
        
    }

    const handleRemove = (playlist_id) =>{
        fetch('http://localhost:8080/api/playlist/'+playlist_id+'/'+song.song_id,{
            method:'DELETE',
            headers:{
                'Authorization':token
            }
        })
    }


    
    const isPlay = useSelector(state => state.playLists).isPlay
    const songID = useSelector(state => state.playLists).songID
    
    
    

    return (
        <div className={song.song_id==songID?"holdsong-active":"holdsong"} >
            <div>
                <div className='textIndex'>
                    <p>{index}</p>
                </div>
                <div className='iconPlay'>
                    <div className='iconPlay-play'>
                        <PlayArrowIcon onClick={handleClick}/>
                    </div>
                    <div className='iconPlay-pause'>
                        <PauseIcon onClick={handleClick} style={{display: isPlay?'block':'none' ,color:'green' }}/> 
                        <PlayArrowIcon onClick={handleClick} style={{display: !isPlay?'block':'none'}}/>  
                    </div>
                   
                </div>
                <img src={song.song_image}></img>
                {/* <p>{song.song_name} ( with {song.artists[0].artist_name} )</p> */}
                
                <p>{song.song_name}</p>
                
            </div>
            <p>571.116.699</p>
            <div className = 'end_holder'>
                <FavoriteBorderIcon style={{display: isFavourite||!token?'none':'block' , fontSize: 18 }} onClick={handleLike}/>
                <FavoriteIcon style={{display: isFavourite&&token?'block':'none',fontSize: 18 }} onClick={handleUnLike}/>
                <p>2:21</p>
                <RemoveCircleOutlineIcon style={{display:canRemove?'block':'none',fontSize: 18 }} onClick={() => handleRemove(playListID)}/>
            </div>
            <a href={'http://localhost:8080/api/song/download/'+song.song_id}>
                <DownloadForOfflineIcon style={{fontsize:18,color:'white' }}/>
            </a>
            

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


