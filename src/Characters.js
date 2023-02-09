import React from "react";
import CharacterDetails from "./CharacterDetails";


const Characters = ( {peopleData} ) => {
    const charactersList = peopleData.map ( (character, id) => {
        return (
            <div key={id}>
                <CharacterDetails 
                key={character.url} 
                personName={character.name}
                date={character.birth_year}
                gender={character.gender}
                skin={character.skin_color}
                films={character.films}
                starship={character.starships}
                />
            </div>
        )
    }
);

        return (
            <div>
                {charactersList}
            </div>
        )
}

export default Characters;