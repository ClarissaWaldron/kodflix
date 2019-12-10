import React from 'react';
import getImproveTvShowInfo from './sInfo';
import Tvshow from './tvShow'; 

export default function Gallery () {
    return ( 
        <div>
        <section className="gallery">
        {
          getImproveTvShowInfo().map(show => (
            <Tvshow 
            key={show.id}
            id={show.id}
            name={show.name}
            image={show.image} />
          ))
        }
    </section>
    </div>
    );
}

