import React from 'react'
import FowardIcon from '../Component/FowardIcon/FowardIcon'
import Account from '../Component/Account/Account'
import './BodySearch.css'
import SearchIcon from '@material-ui/icons/Search';
import MostFavourite from '../Component/MostFavourite/MostFavourite';
import ListFindAll from '../Component/ListFindAll/ListFindAll';

export default function BodySearch() {
    return (
        <div className='body'>
            <div className = 'body-bar'>
                <div className = 'body-bar__first'>
                    <FowardIcon/>
                    <div className='body-bar__find'>
                        <SearchIcon/>
                        <input placeholder='Nghệ sĩ, bài hát hoặc podcast'/>
                    </div>
                    
                </div>
                
                <Account/>
            </div>

        <div className='bodysearch-main'>
            <MostFavourite/>
            <ListFindAll/>
            <ListFindAll/>
            <ListFindAll/>
            <ListFindAll/>
            <ListFindAll/>
            <ListFindAll/>
            <ListFindAll/>
        </div>  
            


            
        </div>
    )
}
