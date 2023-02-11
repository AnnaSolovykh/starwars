import React from "react";
import { Component } from "react";
import PeopleInFilms from "./PeopleInFilms";

class FilmsDetails extends Component {
    constructor() {
        super()
        this.state = {
            characters: ['Loading characters...'],
            personInfo: []        
        }
    }

    componentDidMount() {
        const charactersArray = [];
        
        const fetchCharacters = this.props.characters.map ( (characterUrl, id) => fetch(characterUrl)
        .then (res => res.json())
        .then ( data => {
            charactersArray.push(`${data.name} `)
            charactersArray.sort();
            this.setState( {personInfo: data} )
        } ))

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

            { this.state.characters.map (  (character, id) => (
                <div key={id}>
                    <p className="text over"> {character}</p>
                    <PeopleInFilms key={id}  people={this.state.personInfo} />
                </div>

                
            ))  }
    </div>
        )
    }
}

export default FilmsDetails;