/*function Films ({filmsData}) {


    return (
        <div>
            <h2>{filmsData.title}</h2>
            <p>{ filmsData.director}</p>
            <p>{ filmsData.release_date}</p>
            <p>{ filmsData.opening_crawl}</p>
            <div>{filmsData.characters}</div>
            
        </div>
    )
}

export default Films;*/

import React from "react";
import FilmsDetails from "./FilmsDetails";

const Films = ( {data} ) => {
    const filmsList = data.map ( (film, id) => {
        return (
            <div key={id} >
                <FilmsDetails 
                key={film.url} 
                title={film.title} 
                director={film.director}
                description={film.opening_crawl}
                characters={film.characters}
                />
                
            </div>
        )
    }
);

        return (
            <div className="container-wrapper">
                {filmsList}
            </div>
        )
}

export default Films;