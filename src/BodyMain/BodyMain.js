import React, { useEffect , useState } from 'react';
import './BodyMain.css';
import FowardIcon from '../Component/FowardIcon/FowardIcon';
import Account from '../Component/Account/Account';
import PlayListHome from '../Component/PlayListHome/PlayListHome';
import RecomListHome from '../Component/RecomListHome/RecomListHome';
import { useDispatch,useSelector } from 'react-redux';
import { addFavourites  } from '../Component/HoldSong/songSlice';
import axios from 'axios';
import { data } from 'jquery';





export default function BodyMain() {
    const [dataPlayList,setDataPlayList] = useState([]);
    const [favourites , setFavourites] = useState([]);
    const token = useSelector(state => state.playLists).token

    useEffect(() => {
        fetch('http://localhost:8080/api/playlist')
            .then(respone => respone.json())
            .then(data => {
                 setDataPlayList(split_data(getData(data,8),4));
            });
    },[])

    
    
    


    useEffect(() => {
        fetch('http://localhost:8080/api/playlist/PL0002',{
            headers:{
                'Authorization':token
            }
        })
            .then(respone => respone.json())
            .then(data => {
                // setFavourites(data.listSongs)
                // console.log(data.listSongs)
            });
    },[])


    

    // const favouritesSongID = []
    // for(let i = 0 ; i <= favourites.length - 1 ; i++){
    //     favouritesSongID.push(favourites[i].song_id)
    // }

    // const action  = addFavourites({
    //     favourites: favouritesSongID
    // })
    // const dispatch = useDispatch();
    // dispatch(action);

    

    
        
    return (
        <div className='body'>
            <div className='bodymain-top'>
                <div className='body-bar'>
                    <FowardIcon/>
                    <div>
                        <Account/>
                    </div>
                </div>

                <div className='bodymain-fisrtlist'>
                    <h>Chào buổi chiều</h>
                    <div>
                        <PlayListHome dataPlayList = {dataPlayList[0]}/>
                        <PlayListHome dataPlayList = {dataPlayList[1]}/>
                        
                    </div>
                </div>
            </div>
            <div className='bodymain-body'>
                <RecomListHome/>
                <RecomListHome/>
                <RecomListHome/>
                <RecomListHome/>
                <RecomListHome/>
                <RecomListHome/>

                
            </div>
        </div>
    )
}

function split_data(array, size)
{
    var i,j, temporary, chunk = size;
    var result = []
    for (i = 0,j = array.length; i < j; i += chunk) {
        temporary = array.slice(i, i + chunk);
        result.push(temporary)
    }

    return result;

}

function getData(array, size){
    var result = []
    var i , count = 0;
    for(i = 0 ; i <= array.length - 1 ; i++){
        if(array[i].playlist_name!='Liked Song')
        {
            result.push(array[i]);
            count ++;
        }

        if(count == size) break;
            
    }

    return result;
}




