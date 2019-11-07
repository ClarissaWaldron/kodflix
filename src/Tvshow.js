import React from 'react';
import {Link} from 'react-router-dom';

export default function Tvshow (props) {
    return (
          <Link to='/Tvshowinfo' className='item'>
             <img src={props.image} alt={props.name}/>
             <div className="overlay">{props.name}</div>
             
      </Link>
    )
}
