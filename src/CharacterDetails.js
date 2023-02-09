import React from "react";
import { Component } from "react";

class CharacterDetails extends Component {
    constructor() {
        super()
        this.state = {
         //   starship: ['Loading...'],
            films: ['Loading films...'],
        }
    }

    componentDidMount() {
/*
        fetch(this.props.starship[0])
        .then(resp => resp.json())
        // .then(text => console.log(json))
        .then(ship => this.setState( {starship: ship.name} ))
*/

        const filmsArray = [];
        
        const fetchFilms = this.props.films.map ( (filmrUrl, id) => fetch(filmrUrl)
        .then (res => res.json())
        .then ( dataFilm => {
            filmsArray.push(`${dataFilm.title}`)
            filmsArray.sort();
        } ));

        

        Promise.all(fetchFilms)
        .then(promisesArray => {this.setState( {films: filmsArray} )})
        .catch( (err) => console.log ( 'error:', err ) )
     
    }

    render() {
       return (
        <div>

                    <p>{this.props.personName}</p>
                    <p>Birth date: {this.props.date}</p>
                    <p>Gender: {this.props.gender}</p>
                    <p>Skin color: {this.props.skin}</p>
                    {/* <p>The starship's name: {this.state.starship}</p> */}
                     <p>Featured in:</p>
                     <ul> {this.state.films.map ( (film, id) => (
                        <li key={id}>{film}</li>
                    )

                    )}
                    </ul> 
                
    </div>
       )
    }
}

export default CharacterDetails;