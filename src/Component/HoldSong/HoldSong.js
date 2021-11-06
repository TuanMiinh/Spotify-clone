import React from 'react'
import './HoldSong.css'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { useDispatch } from 'react-redux';
import { setCurrentSong,setState,addPlayList,addFavourites ,setSongIndex, removeFavourites} from './songSlice';
import { useSelector } from 'react-redux';
import PauseIcon from '@material-ui/icons/Pause';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useState , useEffect } from 'react';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

export default function HoldSong({song,index,playListID}) {

    const [listSong, setListSong] = useState([]);
    const [isFavourite , setIsFavourite] = useState(useSelector(state => state.playLists).favourites.indexOf(song.song_id) > -1);
    const token = useSelector(state => state.playLists).token
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

        

        

        const action3 = addPlayList({
            playListID : playListID,
            listSong : sort_by_key(listSong,"song_id")
        })
        
        dispatch(action3)
        
        const action4 = setSongIndex({
            song_id : song.song_id
        })
        
        dispatch(action4)
    }
    
    const handleLike = () =>{
        alert("Added to your favourite list !")
        fetch('http://localhost:8080/api/playlist/add/PL0002/'+song.song_id, {
                method: 'GET',
                headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                
        })
        const action  = addFavourites({
            favourite: song.song_id
        })
        
        dispatch(action);

        setIsFavourite(!isFavourite)
        
        
    }

    const handleUnLike = () =>{
        alert("Removed from your favourite list !")
        fetch('http://localhost:8080/api/playlist/remove/PL0002/'+song.song_id, {
                method: 'GET',
                headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                
        })
        const action  = removeFavourites({
            favourite: song.song_id
        })
        
        dispatch(action);

        setIsFavourite(!isFavourite)
        
        
    }


    const currentSong = useSelector(state => state.playLists).currentSong
    const isPlay = useSelector(state => state.playLists).isPlay
    const playListIdState = useSelector(state => state.playLists).playListID
    const songID = useSelector(state => state.playLists).songID
    
    
    

    return (
        // <div className={currentSong==index-1&&playListID==playListIdState?"holdsong-active":"holdsong"} > 
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
                        {/* <PauseIcon onClick={handleClick} style={{display: isPlay&&playListID==playListIdState?'block':'none' }}/>  */}
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
                {/* <div>
                    <FavoriteBorderIcon style={{display: isFavourite?'none':'block' , fontSize: 18 }} onClick={handleLike}/>
                </div> */}
                <FavoriteBorderIcon style={{display: isFavourite?'none':'block' , fontSize: 18 }} onClick={handleLike}/>
                <FavoriteIcon style={{display: isFavourite?'block':'none',fontSize: 18 }} onClick={handleUnLike}/>
                <p>2:21</p>
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


