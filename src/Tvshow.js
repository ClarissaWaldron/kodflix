import React from 'react';

export default function Tvshow (props) {
    return (
          <div className='item'>
             <img src={props.image} alt={props.name}/>
             <div className="overlay">{props.name}</div>
             
      </div>
    )
}
