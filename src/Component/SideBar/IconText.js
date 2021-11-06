import React from 'react'
import { useRouteMatch , useLocation} from 'react-router'
import { Link } from 'react-router-dom'


export default function IconText({name,Icon,url,id}) {
    
    return Icon?(
        <Menu name={name} Icon={Icon} url={url}/>
    ):(
        <Link to={'/playlist/'+id} className='text-link'>
            <div className='icontext'>
                <p>{name}</p>
            </div>
        </Link>
        
    )
}

function Menu({name,Icon,url}){
    let match = useRouteMatch({
        path: url,
        exact: true,
        strict:true
    })

    

    
    return (
        <div className={match?'icontex-active':'icontext'}> 
            <Icon/>
            <p>{name}</p>
        </div>
    )
    
}




