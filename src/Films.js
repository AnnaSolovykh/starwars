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