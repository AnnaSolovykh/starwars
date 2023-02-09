import React from "react";
import { Component } from "react";

class FilmsDetails extends Component {
    constructor() {
        super()
        this.state = {
            characters: ['Loading characters...']
        }
    }

    componentDidMount() {
       const charactersArray = [];
        
        const fetchCharacters = this.props.characters.map ( (characterUrl, id) => fetch(characterUrl)
        .then (res => res.json())
        .then ( data => {
            charactersArray.push(`${data.name}`)
            charactersArray.sort();
        } ));

        

        Promise.all(fetchCharacters)
        .then(promisesArray => {this.setState( {characters: charactersArray} )})
        .catch( (err) => console.log ( 'error:', err ) )
     
    }

    render() {
       return (
        <div>
        <h3>{this.props.title}</h3> 
        <h4>The director is {this.props.director}.</h4>
        <h4>What is the film about?</h4>
        <p>{this.props.description}</p>
        <h4>Name of the characters: </h4>
        <ul>
            { this.state.characters.map (  (character, id) => (
                <li key={id}>{character} </li>
            )

            )  }
        </ul>
    </div>
       )
    }
}

export default FilmsDetails;