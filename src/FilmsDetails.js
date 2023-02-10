import React from "react";
import { Component } from "react";



class FilmsDetails extends Component {
    constructor() {
        super()
        this.state = {
            characters: ['Loading characters...'],
         
        }
    }

    componentDidMount() {
       const charactersArray = [];

        
        const fetchCharacters = this.props.characters.map ( (characterUrl, id) => fetch(characterUrl)
        .then (res => res.json())
        .then ( data => {

            console.log(data)
            charactersArray.push(`${data.name} `)
            charactersArray.sort();
           
        } ));

        

        Promise.all(fetchCharacters)
        .then(promisesArray => {this.setState( {characters: charactersArray} )})
        .catch( (err) => console.log ( 'error:', err ) )
     
    }

    render() {
        
       return (
        <div className="container">
            <h3 className="heading">{this.props.title}</h3> 
            <h4 className="subheading">The director is {this.props.director}.</h4>
            <h4 className="subheading">What is the film about?</h4>
            <p className="text">{this.props.description}</p>
            <h4 className="subheading">Names of the characters: </h4>

            <ul className="list">
             { this.state.characters.map (  (character, id) => (
                <li key={id} className="list-item text"> {character} </li>
    
             )

            )  }
            </ul>
    </div>
       )
    }
}

export default FilmsDetails;