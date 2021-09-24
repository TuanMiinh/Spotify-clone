import React from 'react'
import { useRouteMatch , useLocation} from 'react-router'


export default function IconText({name,Icon,url}) {
    
    return Icon?(
        <Menu name={name} Icon={Icon} url={url}/>
    ):(
        <div className='icontext'>
            <p>{name}</p>
        </div>
    )
}

function Menu({name,Icon,url}){
    let match = useRouteMatch({
        path: url,
        exact: true,
        strict:true
    })

    console.log(match?match.path:'null')

    
    return (
        <div className={match?'icontex-active':'icontext'}> 
            <Icon/>
            <p>{name}</p>
        </div>
    )
    
}




