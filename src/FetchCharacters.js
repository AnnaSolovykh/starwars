
import React from "react";
import { Component } from "react";
import Characters from "./Characters";


class FetchCharacters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      peopleData: [],
    }
  }


componentDidMount() {
  const url = 'https://swapi.dev/api/people/';

  fetch(url) 
  .then (response => response.json())
  .then (people => this.setState ( {peopleData: people.results} ))
  
}

render() {
  const { peopleData } = this.state;
  return (
    <div className="App">
      <Characters peopleData={peopleData}/>

    </div>
  );
}
}

export default FetchCharacters;






/*


import { useEffect, useState } from "react";



function Characters ({filmsData})  {
    const [characters, setCharaters] = useState([])

    const getCharacterInfo = async () => {
    //const response = await fetch("https://www.swapi.tech/api/people?page=2&limit=82");
    const response = await fetch("https://swapi.dev/api/people/");
    
    const data = await response.json();
    console.log(data.results)      
    setCharaters(data.results)
}


// const check = () => {
//     if ( filmsData[id].properties.characters === characters[id]) {
//         console.log(characters[id])
//     }
// }


useEffect (  () => {
    getCharacterInfo()
  }, []
  )



    return (
        <div className="App">
             {characters.map (  ( character, id ) => (
                <div key={id}>
                    <p>{character.name}</p>
                    <p>Birth date: {character.birth_year}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Skin color: {character.skin_color}</p>
                    <p>Fitchered: {character.films}</p>
                    <p>The staship's name: {character.starships}</p>
                </div>
            )
            ) }
            

    
        </div>
    )
}

export default Characters 
*/